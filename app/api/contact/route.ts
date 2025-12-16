import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    const { name, email, message, locale = "hu" } = await request.json();

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
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
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
      subject: `Új kapcsolatfelvételi üzenet${
        locale === "en" ? " (Angol nyelvű weboldalról)" : ""
      } - ${name}`,
      headers: {
        "X-Original-Sender": email, // Custom header to show original sender
        "X-Original-Name": name,
        "X-Customer-Language": locale,
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
            <p style="margin: 5px 0;"><strong>Weboldal nyelve:</strong> ${
              locale === "en" ? "Angol (EN)" : "Magyar (HU)"
            }</p>
          </div>
          
          <div style="margin: 20px 0; padding: 15px; background-color: #d1ecf1; border-left: 4px solid #bee5eb;">
            <h3 style="margin: 0 0 10px 0; color: #0c5460;">Üzenet:</h3>
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
Weboldal nyelve: ${locale === "en" ? "Angol (EN)" : "Magyar (HU)"}

Üzenet:
${message}

---
Magyar Tűzvédelem Zrt. - Kapcsolatfelvételi űrlap
Küldés időpontja: ${new Date().toLocaleString("hu-HU")}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Send confirmation email to customer (in their language)
    const customerMailOptions = {
      from: `"Magyar Tűzvédelem Zrt." <${process.env.EMAIL_ADDRESS}>`,
      to: email,
      subject:
        locale === "en"
          ? "Message Received - Magyar Tűzvédelem Zrt."
          : "Üzenet beérkezett - Magyar Tűzvédelem Zrt.",
      html:
        locale === "en"
          ? `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #333; border-bottom: 2px solid #e74c3c; padding-bottom: 10px;">
            Thank you for your message!
          </h2>
          
          <div style="margin: 20px 0; padding: 15px; background-color: #d4edda; border-left: 4px solid #28a745;">
            <p style="margin: 0; line-height: 1.6; font-size: 16px;">
              <strong>Dear ${name}!</strong>
            </p>
            <p style="margin: 10px 0 0 0; line-height: 1.6;">
              We have successfully received your message and our colleagues will respond to you soon 
              at <strong>${email}</strong>.
            </p>
          </div>
          
          <div style="margin: 20px 0; padding: 15px; background-color: #f8f9fa; border-left: 4px solid #6c757d;">
            <h3 style="margin: 0 0 10px 0; color: #333;">Contact us:</h3>
            <ul style="margin: 10px 0; padding-left: 20px; line-height: 1.6;">
              <li><strong>Phone:</strong> +36 30 475 1050</li>
              <li><strong>Email:</strong> info@magyartuzvedelemzrt.hu</li>
              <li><strong>Address:</strong> 1052 Budapest, Deák Ferenc tér 3. (Meyer Levinson floor)</li>
            </ul>
          </div>
          
          <div style="margin-top: 30px; text-align: center; font-size: 12px; color: #666;">
            <p style="margin: 0;">Magyar Tűzvédelem Zrt.</p>
            <p style="margin: 5px 0 0 0;">Professional Fire Safety Solutions from Experts</p>
          </div>
        </div>
      `
          : `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #333; border-bottom: 2px solid #e74c3c; padding-bottom: 10px;">
            Köszönjük üzenetét!
          </h2>
          
          <div style="margin: 20px 0; padding: 15px; background-color: #d4edda; border-left: 4px solid #28a745;">
            <p style="margin: 0; line-height: 1.6; font-size: 16px;">
              <strong>Tisztelt ${name}!</strong>
            </p>
            <p style="margin: 10px 0 0 0; line-height: 1.6;">
              Sikeresen megkaptuk üzenetét, és kollégáink hamarosan válaszolnak Önnek 
              a <strong>${email}</strong> email címen.
            </p>
          </div>
          
          <div style="margin: 20px 0; padding: 15px; background-color: #f8f9fa; border-left: 4px solid #6c757d;">
            <h3 style="margin: 0 0 10px 0; color: #333;">Elérhetőségeink:</h3>
            <ul style="margin: 10px 0; padding-left: 20px; line-height: 1.6;">
              <li><strong>Telefon:</strong> +36 30 475 1050</li>
              <li><strong>Email:</strong> info@magyartuzvedelemzrt.hu</li>
              <li><strong>Cím:</strong> 1052 Budapest, Deák Ferenc tér 3. (Meyer Levinson emelet)</li>
            </ul>
          </div>
          
          <div style="margin-top: 30px; text-align: center; font-size: 12px; color: #666;">
            <p style="margin: 0;">Magyar Tűzvédelem Zrt.</p>
            <p style="margin: 5px 0 0 0;">Professzionális tűzvédelmi megoldások, szakemberektől</p>
          </div>
        </div>
      `,
      text:
        locale === "en"
          ? `
Thank you for your message!

Dear ${name}!

We have successfully received your message and our colleagues will respond to you soon 
at ${email}.

Contact us:
- Phone: +36 30 475 1050
- Email: info@magyartuzvedelemzrt.hu
- Address: 1052 Budapest, Deák Ferenc tér 3. (Meyer Levinson floor)

---
Magyar Tűzvédelem Zrt.
Professional Fire Safety Solutions from Experts
      `
          : `
Köszönjük üzenetét!

Tisztelt ${name}!

Sikeresen megkaptuk üzenetét, és kollégáink hamarosan válaszolnak Önnek 
a ${email} email címen.

Elérhetőségeink:
- Telefon: +36 30 475 1050
- Email: info@magyartuzvedelemzrt.hu
- Cím: 1052 Budapest, Deák Ferenc tér 3. (Meyer Levinson emelet)

---
Magyar Tűzvédelem Zrt.
Professzionális tűzvédelmi megoldások, szakemberektől
      `,
    };

    // Send confirmation email to customer
    await transporter.sendMail(customerMailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error("Error details:", errorMessage);
    return NextResponse.json(
      { error: `Failed to send email: ${errorMessage}` },
      { status: 500 }
    );
  }
}
