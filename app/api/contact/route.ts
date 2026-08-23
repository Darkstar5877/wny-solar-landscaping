import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      firstName,
      lastName,
      company,
      email,
      phone,
      location,
      siteSize,
      message,
    } = body;

    if (!firstName || !lastName || !company || !email || !location || !message) {
      return Response.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "WNY Solar Landscaping <onboarding@resend.dev>",
      to: ["onboarding@resend.dev"],
      replyTo: email,
      subject: `New Quote Request - ${company}`,
      html: `
        <h2>New WNY Solar Landscaping Quote Request</h2>

        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Project Location:</strong> ${location}</p>
        <p><strong>Approximate Site Size:</strong> ${siteSize || "Not provided"}</p>

        <h3>Project Details</h3>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error(error);

      return Response.json(
        { error: "Unable to send your request." },
        { status: 500 }
      );
    }

    return Response.json({ success: true, data });
  } catch (error) {
    console.error(error);

    return Response.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}