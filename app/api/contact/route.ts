import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Validate field lengths
    if (name.length > 100 || email.length > 100 || message.length > 1000) {
      return NextResponse.json(
        { error: "Field length exceeded" },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content - Making it appear as if it's from the form filler
    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_ADDRESS}>`, // Your authenticated Gmail
      to: process.env.EMAIL_ADDRESS, // Your Gmail address as receiver
      replyTo: email, // Form filler's email for easy reply
      subject: `Új kapcsolatfelvételi üzenet - ${name}`,
      headers: {
        "X-Original-Sender": email, // Custom header to show original sender
        "X-Original-Name": name,
      },
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #333; border-bottom: 2px solid #e74c3c; padding-bottom: 10px;">
            Új kapcsolatfelvételi üzenet
          </h2>
          
          <div style="margin: 20px 0; padding: 15px; background-color: #f8f9fa; border-left: 4px solid #e74c3c;">
            <h3 style="margin: 0 0 10px 0; color: #333;">Küldő adatai:</h3>
            <p style="margin: 5px 0;"><strong>Név:</strong> ${name}</p>
            <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
          </div>
          
          <div style="margin: 20px 0; padding: 15px; background-color: #f8f9fa; border-left: 4px solid #e74c3c;">
            <h3 style="margin: 0 0 10px 0; color: #333;">Üzenet:</h3>
            <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="margin-top: 20px; text-align: center; font-size: 12px; color: #666;">
            <p style="margin: 0;">Magyar Tűzvédelem Zrt. - Kapcsolatfelvételi űrlap</p>
            <p style="margin: 5px 0 0 0;">Küldés időpontja: ${new Date().toLocaleString(
              "hu-HU"
            )}</p>
          </div>
        </div>
      `,
      text: `
Új kapcsolatfelvételi üzenet

Küldő adatai:
Név: ${name}
Email: ${email}

Üzenet:
${message}

---
Magyar Tűzvédelem Zrt. - Kapcsolatfelvételi űrlap
Küldés időpontja: ${new Date().toLocaleString("hu-HU")}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
