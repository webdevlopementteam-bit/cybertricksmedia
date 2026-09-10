import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const data = await req.json();

    // Yahan payment record save karo — email, Google Sheet, DB, jo bhi ho
    console.log("PAYMENT RECEIVED:", {
      payment_id: data.payment_id,
      amount: data.amount,
      name: `${data.first_name} ${data.last_name}`,
      company: data.company,
      email: data.email,
      mobile: data.mobile,
      payment_for: data.payment_for,
      at: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}