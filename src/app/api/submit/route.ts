import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const data = await req.json();

  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey) {
    console.error("RESEND_API_KEY not configured");
    return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
  }

  const resend = new Resend(resendKey);

  const emailBody = `
New Adventure Design Inquiry
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name: ${data.name}
Email: ${data.email}

Adventure Types: ${data.adventureTypes || "Not specified"}
Destination Interest: ${data.destination || "Open to suggestions"}
Timing: ${data.timing || "Flexible"}
Group: ${data.group || "Not specified"}
Experience Level: ${data.experience || "Not specified"}
Budget: ${data.budget || "Not specified"}

What Matters Most:
${data.priorities || "Not specified"}

Referral: ${data.referral || "Not specified"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Submitted from keelridge.co/design
  `.trim();

  try {
    await resend.emails.send({
      from: "Keel Ridge <onboarding@resend.dev>",
      to: "whit@keelridge.co",
      replyTo: data.email,
      subject: `New Adventure Inquiry from ${data.name}`,
      text: emailBody,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
