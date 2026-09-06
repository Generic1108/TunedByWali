import { NextResponse } from "next/server";

type Inquiry = {
  name?: string;
  email?: string;
  phone?: string;
  vehicle?: string;
  service?: string;
  message?: string;
  company?: string;
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: Inquiry;

  try {
    body = (await request.json()) as Inquiry;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (body.company) {
    return NextResponse.json({ ok: true });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const message = body.message?.trim() ?? "";
  const vehicle = body.vehicle?.trim() ?? "";

  if (name.length < 2) {
    return NextResponse.json({ error: "Please add your name." }, { status: 400 });
  }
  if (!isEmail(email)) {
    return NextResponse.json({ error: "Please add a valid email." }, { status: 400 });
  }
  if (vehicle.length < 2) {
    return NextResponse.json(
      { error: "Please add year, make, and model." },
      { status: 400 },
    );
  }
  if (message.length < 8) {
    return NextResponse.json(
      { error: "Please add a short note about the work." },
      { status: 400 },
    );
  }

  // Wire an email provider (Resend, SES, etc.) here when deploying.
  // For now the shop still receives bookings via Square and email/phone.
  console.info("[inquiry]", {
    name,
    email,
    phone: body.phone ?? "",
    vehicle,
    service: body.service ?? "",
    message,
  });

  return NextResponse.json({ ok: true });
}
