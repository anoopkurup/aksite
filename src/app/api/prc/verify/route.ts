import { NextResponse } from "next/server";
import crypto from "crypto";

// Verifies the Razorpay payment signature server-side.
// HMAC-SHA256(order_id|payment_id, key_secret) must equal the signature.
export async function POST(request: Request) {
  const keySecret = process.env.RAZORPAY_KEY_SECRET;
  if (!keySecret) {
    return NextResponse.json({ error: "Payments not configured" }, { status: 500 });
  }

  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = await request.json();
  if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
    return NextResponse.json({ error: "Missing payment fields" }, { status: 400 });
  }

  const expected = crypto
    .createHmac("sha256", keySecret)
    .update(`${razorpay_order_id}|${razorpay_payment_id}`)
    .digest("hex");

  const valid =
    expected.length === razorpay_signature.length &&
    crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(razorpay_signature));

  if (!valid) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }
  return NextResponse.json({ verified: true });
}
