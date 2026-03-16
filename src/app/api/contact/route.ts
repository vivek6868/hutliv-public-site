import { NextResponse } from "next/server";

const RESEND_ENDPOINT = "https://api.resend.com/emails";
const recipients = [
  "vivek@hutliv.com",
  "hello@hutliv.com",
  "iamvivekd@gmail.com",
  "anupiyaramakrishnan@gmail.com",
];

type ContactPayload = {
  name?: string;
  email?: string;
  interest?: string;
  message?: string;
};

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL ?? "Hutliv <onboarding@resend.dev>";

  if (!apiKey) {
    return NextResponse.json(
      { error: "RESEND_API_KEY is not configured on the server." },
      { status: 500 },
    );
  }

  const body = (await request.json()) as ContactPayload;
  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const interest = body.interest?.trim() ?? "General Hutliv overview";
  const message = body.message?.trim() ?? "";

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  const text = [
    "New contact form submission from hutliv.com",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Interest: ${interest}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
      <h2 style="margin-bottom: 16px;">New contact form submission from hutliv.com</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Interest:</strong> ${interest}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br />")}</p>
    </div>
  `;

  const resendResponse = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: recipients,
      reply_to: email,
      subject: `New Hutliv enquiry from ${name}`,
      text,
      html,
    }),
  });

  if (!resendResponse.ok) {
    const errorText = await resendResponse.text();
    return NextResponse.json(
      { error: `Resend error: ${errorText}` },
      { status: resendResponse.status },
    );
  }

  return NextResponse.json({ success: true });
}
