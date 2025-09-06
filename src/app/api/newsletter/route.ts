import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Valid email address is required' },
        { status: 400 }
      );
    }

    // Get ConvertKit configuration
    const CONVERTKIT_API_KEY = process.env.CONVERTKIT_API_KEY;
    const CONVERTKIT_FORM_ID = process.env.CONVERTKIT_FORM_ID;

    if (!CONVERTKIT_API_KEY || !CONVERTKIT_FORM_ID) {
      console.error('ConvertKit configuration missing');
      return NextResponse.json(
        { error: 'Newsletter service configuration error' },
        { status: 500 }
      );
    }

    // Subscribe to ConvertKit
    const convertKitResponse = await fetch(
      `https://api.convertkit.com/v3/forms/${CONVERTKIT_FORM_ID}/subscribe`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          api_key: CONVERTKIT_API_KEY,
          email: email,
          tags: ['website-newsletter'], // Optional: tag subscribers from website
        }),
      }
    );

    if (!convertKitResponse.ok) {
      const errorData = await convertKitResponse.text();
      console.error('ConvertKit API error:', errorData);
      
      // Check for specific ConvertKit errors
      if (convertKitResponse.status === 400) {
        return NextResponse.json(
          { error: 'This email address is already subscribed or invalid' },
          { status: 400 }
        );
      }

      return NextResponse.json(
        { error: 'Failed to subscribe to newsletter. Please try again.' },
        { status: 500 }
      );
    }

    const responseData = await convertKitResponse.json();
    
    // Log successful subscription (remove in production if not needed)
    console.log('Newsletter subscription successful:', { email, subscriber_id: responseData.subscription?.subscriber?.id });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Successfully subscribed to newsletter!' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}

// Email validation helper
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Handle OPTIONS requests for CORS (if needed)
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}