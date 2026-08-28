import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY || !process.env.CONTACT_TO_EMAIL) {
      return Response.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const body = await request.json();

    const firstName = String(body.firstName ?? "").trim();
    const lastName = String(body.lastName ?? "").trim();
    const company = String(body.company ?? "").trim();
    const email = String(body.email ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const location = String(body.location ?? "").trim();
    const siteSize = String(body.siteSize ?? "").trim();
    const message = String(body.message ?? "").trim();
    const website = String(body.website ?? "").trim();

    // Hidden spam field
    if (website) {
      return Response.json({ success: true });
    }

    if (
      !firstName ||
      !lastName ||
      !company ||
      !email ||
      !location ||
      !message
    ) {
      return Response.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return Response.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "WNY Solar Landscaping <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO_EMAIL],
      replyTo: email,
      subject: `New Quote Request - ${company}`,
      text: `
New WNY Solar Landscaping Quote Request

Name: ${firstName} ${lastName}
Company: ${company}
Email: ${email}
Phone: ${phone || "Not provided"}
Project Location: ${location}
Approximate Site Size: ${siteSize || "Not provided"}

Project Details:
${message}
      `.trim(),
    });

    if (error) {
      console.error("Resend error:", error);

      return Response.json(
        { error: "Unable to send your request right now." },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      id: data?.id,
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return Response.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}