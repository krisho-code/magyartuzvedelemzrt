import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    const { email, locale = "hu" } = await request.json();

    // Validate required fields
    if (!email) {
      return NextResponse.json(
        { error: "Email field is required" },
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

    // Validate field length
    if (email.length > 100) {
      return NextResponse.json(
        { error: "Email length exceeded" },
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

    // Email content for help request (always in Hungarian for company)
    const mailOptions = {
      from: `"Magyar Tűzvédelem Zrt." <${process.env.EMAIL_ADDRESS}>`,
      to: process.env.EMAIL_ADDRESS,
      replyTo: email,
      subject: `Segítségkérés${
        locale === "en" ? " (Angol nyelvű weboldalról)" : ""
      } - ${email}`,
      headers: {
        "X-Original-Sender": email,
        "X-Request-Type": "help-request",
        "X-Customer-Language": locale,
      },
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #333; border-bottom: 2px solid #e74c3c; padding-bottom: 10px;">
            Új segítségkérés érkezett
          </h2>
          
          <div style="margin: 20px 0; padding: 15px; background-color: #f8f9fa; border-left: 4px solid #e74c3c;">
            <h3 style="margin: 0 0 10px 0; color: #333;">Ügyfél adatai:</h3>
            <p style="margin: 5px 0;"><strong>Email cím:</strong> ${email}</p>
            <p style="margin: 5px 0;"><strong>Weboldal nyelve:</strong> ${
              locale === "en" ? "Angol (EN)" : "Magyar (HU)"
            }</p>
          </div>
          
          <div style="margin: 20px 0; padding: 15px; background-color: #d1ecf1; border-left: 4px solid #bee5eb;">
            <h3 style="margin: 0 0 10px 0; color: #0c5460;">Javasolt következő lépések:</h3>
            <ul style="margin: 10px 0; padding-left: 20px; line-height: 1.6;">
              <li>Vegye fel a kapcsolatot az ügyféllel 24-48 órán belül</li>
              <li>Kérdezze meg a konkrét problémáját vagy igényét</li>
              <li>Ajánlja fel az ingyenes konzultációt</li>
              <li>Tájékoztassa a releváns szolgáltatásokról</li>
              ${
                locale === "en"
                  ? "<li><strong>FONTOS:</strong> Az ügyfél angol nyelven használta a weboldalt, válaszoljon angol nyelven!</li>"
                  : ""
              }
            </ul>
          </div>
          
          <div style="margin-top: 20px; text-align: center; font-size: 12px; color: #666;">
            <p style="margin: 0;">Magyar Tűzvédelem Zrt. - Segítségkérő űrlap</p>
            <p style="margin: 5px 0 0 0;">Küldés időpontja: ${new Date().toLocaleString(
              "hu-HU"
            )}</p>
          </div>
        </div>
      `,
      text: `
Új segítségkérés érkezett

Ügyfél adatai:
Email cím: ${email}
Weboldal nyelve: ${locale === "en" ? "Angol (EN)" : "Magyar (HU)"}

Segítségkérés típusa:
Az ügyfél segítséget kért a megfelelő szolgáltatás kiválasztásában. 
Nem tudja pontosan, hogy milyen szolgáltatásra van szüksége, ezért szakértői tanácsadást igényel.

Javasolt következő lépések:
- Vegye fel a kapcsolatot az ügyféllel 24-48 órán belül
- Kérdezze meg a konkrét problémáját vagy igényét
- Ajánlja fel az ingyenes konzultációt
- Tájékoztassa a releváns szolgáltatásokról
${
  locale === "en"
    ? "- FONTOS: Az ügyfél angol nyelven használta a weboldalt, válaszoljon angol nyelven!"
    : ""
}

---
Magyar Tűzvédelem Zrt. - Segítségkérő űrlap
Küldés időpontja: ${new Date().toLocaleString("hu-HU")}
      `,
    };

    // Send email to company
    await transporter.sendMail(mailOptions);

    // Send confirmation email to customer (in their language)
    const customerMailOptions = {
      from: `"Magyar Tűzvédelem Zrt." <${process.env.EMAIL_ADDRESS}>`,
      to: email,
      subject:
        locale === "en"
          ? "Help Request Received - Magyar Tűzvédelem Zrt."
          : "Segítségkérés beérkezett - Magyar Tűzvédelem Zrt.",
      html:
        locale === "en"
          ? `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #333; border-bottom: 2px solid #e74c3c; padding-bottom: 10px;">
            Thank you for your help request!
          </h2>
          
          <div style="margin: 20px 0; padding: 15px; background-color: #d4edda; border-left: 4px solid #28a745;">
            <p style="margin: 0; line-height: 1.6; font-size: 16px;">
              <strong>Dear Customer!</strong>
            </p>
            <p style="margin: 10px 0 0 0; line-height: 1.6;">
              We have received your help request, and our colleagues will contact you soon 
              at <strong>${email}</strong>.
            </p>
          </div>
          
          <div style="margin: 20px 0; padding: 15px; background-color: #f8f9fa; border-left: 4px solid #6c757d;">
            <h3 style="margin: 0 0 10px 0; color: #333;">Contact us:</h3>
            <ul style="margin: 10px 0; padding-left: 20px; line-height: 1.6;">
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
            Köszönjük segítségkérését!
          </h2>
          
          <div style="margin: 20px 0; padding: 15px; background-color: #d4edda; border-left: 4px solid #28a745;">
            <p style="margin: 0; line-height: 1.6; font-size: 16px;">
              <strong>Tisztelt Ügyfél!</strong>
            </p>
            <p style="margin: 10px 0 0 0; line-height: 1.6;">
              Megkaptuk segítségkérését, és kollégáink hamarosan felveszik Önnel a kapcsolatot 
              a <strong>${email}</strong> email címen.
            </p>
          </div>
          
          <div style="margin: 20px 0; padding: 15px; background-color: #f8f9fa; border-left: 4px solid #6c757d;">
            <h3 style="margin: 0 0 10px 0; color: #333;">Elérhetőségeink:</h3>
            <ul style="margin: 10px 0; padding-left: 20px; line-height: 1.6;">
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
Thank you for your help request!

Dear Customer!

We have received your help request, and our colleagues will contact you soon 
at ${email}.

Contact us:
- Email: info@magyartuzvedelemzrt.hu
- Address: 1052 Budapest, Deák Ferenc tér 3. (Meyer Levinson floor)

---
Magyar Tűzvédelem Zrt.
Professional Fire Safety Solutions from Experts
      `
          : `
Köszönjük segítségkérését!

Tisztelt Ügyfél!

Megkaptuk segítségkérését, és kollégáink hamarosan felveszik Önnel a kapcsolatot 
a ${email} email címen.

Elérhetőségeink:
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
      { message: "Help request sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending help request:", error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error("Error details:", errorMessage);
    return NextResponse.json(
      { error: `Failed to send help request: ${errorMessage}` },
      { status: 500 }
    );
  }
}
