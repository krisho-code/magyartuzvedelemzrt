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
      service: "gmail",
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
          
          <div style="margin: 20px 0; padding: 15px; background-color: #fff3cd; border-left: 4px solid #ffc107;">
            <h3 style="margin: 0 0 10px 0; color: #856404;">Segítségkérés típusa:</h3>
            <p style="margin: 0; line-height: 1.6;">
              Az ügyfél segítséget kért a megfelelő szolgáltatás kiválasztásában. 
              Nem tudja pontosan, hogy milyen szolgáltatásra van szüksége, ezért szakértői tanácsadást igényel.
            </p>
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
            <h3 style="margin: 0 0 10px 0; color: #333;">What can we do for you?</h3>
            <ul style="margin: 10px 0; padding-left: 20px; line-height: 1.6;">
              <li><strong>Free consultation:</strong> Our experts will help you choose the right service</li>
              <li><strong>Customized offer:</strong> A solution optimized for your needs</li>
              <li><strong>Quick response time:</strong> We will contact you within 24-48 hours</li>
            </ul>
          </div>
          
          <div style="margin: 20px 0; padding: 15px; background-color: #fff3cd; border-left: 4px solid #ffc107;">
            <h3 style="margin: 0 0 10px 0; color: #856404;">Our services:</h3>
            <p style="margin: 0; line-height: 1.6;">
              • Fire Protection<br>
              • Asbestos Removal<br>
              • Fire Damage Restoration<br>
              • Water Damage Restoration<br>
              • Industrial Cleaning and Decontamination<br>
              • Industrial Alpine Technology
            </p>
          </div>
          
          <div style="margin: 20px 0; text-align: center;">
            <p style="margin: 0; line-height: 1.6;">
              <strong>Contact us:</strong><br>
              Phone: +36 30 475 1050<br>
              Email: info@magyartuzvedelemzrt.hu
            </p>
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
            <h3 style="margin: 0 0 10px 0; color: #333;">Mit tehetünk Önért?</h3>
            <ul style="margin: 10px 0; padding-left: 20px; line-height: 1.6;">
              <li><strong>Ingyenes konzultáció:</strong> Szakértőink segítenek kiválasztani a megfelelő szolgáltatást</li>
              <li><strong>Személyre szabott ajánlat:</strong> Az Ön igényeire optimalizált megoldás</li>
              <li><strong>Gyors válaszidő:</strong> 24-48 órán belül jelentkezünk</li>
            </ul>
          </div>
          
          <div style="margin: 20px 0; padding: 15px; background-color: #fff3cd; border-left: 4px solid #ffc107;">
            <h3 style="margin: 0 0 10px 0; color: #856404;">Szolgáltatásaink:</h3>
            <p style="margin: 0; line-height: 1.6;">
              • Tűzvédelem<br>
              • Azbesztmentesítés<br>
              • Tűzkármentesítés<br>
              • Vízkármentesítés<br>
              • Ipari tisztítás és veszélytelenítés<br>
              • Ipari alpintechnika
            </p>
          </div>
          
          <div style="margin: 20px 0; text-align: center;">
            <p style="margin: 0; line-height: 1.6;">
              <strong>Elérhetőségeink:</strong><br>
              Telefon: +36 30 475 1050<br>
              Email: info@magyartuzvedelemzrt.hu
            </p>
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

What can we do for you?
- Free consultation: Our experts will help you choose the right service
- Customized offer: A solution optimized for your needs  
- Quick response time: We will contact you within 24-48 hours

Our services:
• Fire Protection
• Asbestos Removal
• Fire Damage Restoration
• Water Damage Restoration
• Industrial Cleaning and Decontamination
• Industrial Alpine Technology

Contact us:
Phone: +36 30 475 1050
Email: info@magyartuzvedelemzrt.hu

---
Magyar Tűzvédelem Zrt.
Professional Fire Safety Solutions from Experts
      `
          : `
Köszönjük segítségkérését!

Tisztelt Ügyfél!

Megkaptuk segítségkérését, és kollégáink hamarosan felveszik Önnel a kapcsolatot 
a ${email} email címen.

Mit tehetünk Önért?
- Ingyenes konzultáció: Szakértőink segítenek kiválasztani a megfelelő szolgáltatást
- Személyre szabott ajánlat: Az Ön igényeire optimalizált megoldás  
- Gyors válaszidő: 24-48 órán belül jelentkezünk

Szolgáltatásaink:
• Tűzvédelem
• Azbesztmentesítés
• Tűzkármentesítés
• Vízkármentesítés
• Ipari tisztítás és veszélytelenítés
• Ipari alpintechnika

Elérhetőségeink:
Telefon: +36 30 475 1050
Email: info@magyartuzvedelemzrt.hu

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
    return NextResponse.json(
      { error: "Failed to send help request" },
      { status: 500 }
    );
  }
}
