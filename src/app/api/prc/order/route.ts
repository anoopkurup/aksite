import { NextResponse } from "next/server";

// Creates a Razorpay order for the Pipeline Reality Check.
// Amount lives here, server-side — never trust a price from the client.
const PRC_AMOUNT_PAISE = 25_000 * 100;

export async function POST() {
  const keyId = process.env.RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;
  if (!keyId || !keySecret) {
    return NextResponse.json({ error: "Payments not configured" }, { status: 500 });
  }

  const res = await fetch("https://api.razorpay.com/v1/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${Buffer.from(`${keyId}:${keySecret}`).toString("base64")}`,
    },
    body: JSON.stringify({
      amount: PRC_AMOUNT_PAISE,
      currency: "INR",
      notes: { product: "Pipeline Reality Check" },
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ error: "Could not create order" }, { status: 502 });
  }

  const order = await res.json();
  return NextResponse.json({
    orderId: order.id,
    amount: order.amount,
    currency: order.currency,
    keyId,
  });
}
