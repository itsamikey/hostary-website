import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, properties, type, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("[Contact] RESEND_API_KEY is not configured");
      return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }

    const inquiryLabels: Record<string, string> = {
      general: "General Inquiry",
      demo: "Demo Request",
      support: "Support",
      enterprise: "Enterprise/Scale Plan",
    };

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // Change "from" to noreply@hostary.app once domain is verified in Resend
        from: "Hostary Contact <onboarding@resend.dev>",
        to: "mike@unomi.net",
        reply_to: email,
        subject: `[Hostary] ${inquiryLabels[type] || "Contact"} from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
          ${properties ? `<p><strong>Properties:</strong> ${properties}</p>` : ""}
          <p><strong>Inquiry Type:</strong> ${inquiryLabels[type] || type}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br />")}</p>
        `,
      }),
    });

    if (!res.ok) {
      const error = await res.json();
      console.error("[Contact] Resend error:", error);
      return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
