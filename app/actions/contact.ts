"use server";

import nodemailer from "nodemailer";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
};

// Where form submissions are delivered. Override with CONTACT_TO if needed.
const TO_EMAIL = process.env.CONTACT_TO || "aqibmaroof786@gmail.com";

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function sendContactMessage(
  _prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const firstName = String(formData.get("firstName") ?? "").trim();
  const lastName = String(formData.get("lastName") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  // Validate
  if (!firstName || !lastName || !email || !message) {
    return { status: "error", message: "Please fill in all fields." };
  }
  if (!isEmail(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;

  if (!SMTP_USER || !SMTP_PASS) {
    console.error("Contact form: missing SMTP_USER / SMTP_PASS env vars.");
    return {
      status: "error",
      message:
        "The contact form isn't configured yet. Please email us directly for now.",
    };
  }

  const host = SMTP_HOST || "smtp.gmail.com";
  const port = Number(SMTP_PORT) || 465;

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465, // true for 465, false for 587/STARTTLS
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const fullName = `${firstName} ${lastName}`;
  const submittedAt = new Date().toLocaleString("en-US", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "America/Los_Angeles",
  });

  try {
    await transporter.sendMail({
      // Must be the authenticated mailbox for most providers (e.g. Gmail).
      from: `"Restore Physical Therapy" <${SMTP_USER}>`,
      to: TO_EMAIL,
      replyTo: `"${fullName}" <${email}>`,
      subject: `New contact message from ${fullName}`,
      text: `New contact form submission\n\nName: ${fullName}\nEmail: ${email}\nSubmitted: ${submittedAt}\n\nMessage:\n${message}`,
      html: renderEmail({ fullName, email, message, submittedAt }),
    });

    return {
      status: "success",
      message: "Thanks for reaching out — we'll be in touch shortly.",
    };
  } catch (error) {
    console.log("Contact form: failed to send email.", error);
    return {
      status: "error",
      message: "Something went wrong while sending your message. Please try again.",
    };
  }
}

// Branded, email-client-safe HTML template (table layout + inline styles).
function renderEmail({
  fullName,
  email,
  message,
  submittedAt,
}: {
  fullName: string;
  email: string;
  message: string;
  submittedAt: string;
}) {
  const brand = "#1c9cd6";
  const brandDark = "#1683b3";
  const ink = "#123542";
  const initials =
    fullName
      .split(/\s+/)
      .map((part) => part[0])
      .filter(Boolean)
      .slice(0, 2)
      .join("")
      .toUpperCase() || "?";

  const safeName = escapeHtml(fullName);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

  const infoRow = (label: string, value: string, last = false) => `
    <tr>
      <td style="padding:16px 0;${
        last ? "" : "border-bottom:1px solid #eef2f6;"
      }">
        <p style="margin:0;font-size:11px;letter-spacing:1.2px;text-transform:uppercase;color:#94a3b8;">${label}</p>
        <p style="margin:5px 0 0;font-size:15px;font-weight:bold;color:${ink};">${value}</p>
      </td>
    </tr>`;

  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="color-scheme" content="light only" />
      <title>New contact form submission</title>
    </head>
    <body style="margin:0;padding:0;background-color:#eef2f6;font-family:'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:${ink};-webkit-font-smoothing:antialiased;">
      <div style="display:none;max-height:0;overflow:hidden;opacity:0;">New message from ${safeName} via the website contact form.</div>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#eef2f6;padding:32px 12px;">
        <tr>
          <td align="center">
            <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:20px;overflow:hidden;box-shadow:0 10px 40px rgba(18,53,66,0.10);">
              <!-- Accent strip -->
              <tr><td style="height:6px;background:linear-gradient(90deg,${brand},${brandDark});font-size:0;line-height:0;">&nbsp;</td></tr>

              <!-- Header -->
              <tr>
                <td align="center" style="padding:40px 32px 24px;">
                  <table role="presentation" cellpadding="0" cellspacing="0" align="center">
                    <tr>
                      <td style="width:64px;height:64px;background:linear-gradient(135deg,${brand},${brandDark});border-radius:18px;text-align:center;vertical-align:middle;font-size:30px;line-height:64px;box-shadow:0 8px 20px rgba(28,156,214,0.35);">✉️</td>
                    </tr>
                  </table>
                  <p style="margin:22px 0 0;display:inline-block;padding:5px 14px;background-color:${brand}14;color:${brandDark};font-size:11px;font-weight:bold;letter-spacing:1.5px;text-transform:uppercase;border-radius:999px;">New Message</p>
                  <h1 style="margin:16px 0 6px;font-size:24px;line-height:1.3;color:${ink};font-weight:bold;">You've got a new inquiry</h1>
                  <p style="margin:0;font-size:14px;line-height:1.6;color:#64748b;">Submitted through the Restore Physical Therapy website.</p>
                </td>
              </tr>

              <!-- Sender + details card -->
              <tr>
                <td style="padding:8px 32px 0;">
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f8fafc;border:1px solid #eef2f6;border-radius:16px;">
                    <tr>
                      <td style="padding:22px 24px 6px;">
                        <table role="presentation" cellpadding="0" cellspacing="0">
                          <tr>
                            <td style="width:48px;vertical-align:middle;">
                              <div style="width:48px;height:48px;border-radius:50%;background:linear-gradient(135deg,${brand},${brandDark});color:#ffffff;font-size:17px;font-weight:bold;text-align:center;line-height:48px;">${initials}</div>
                            </td>
                            <td style="padding-left:14px;vertical-align:middle;">
                              <p style="margin:0;font-size:17px;font-weight:bold;color:${ink};">${safeName}</p>
                              <a href="mailto:${safeEmail}" style="margin:2px 0 0;display:inline-block;font-size:13px;color:${brandDark};text-decoration:none;">${safeEmail}</a>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:0 24px 14px;">
                        <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                          ${infoRow("Email Address", `<a href="mailto:${safeEmail}" style="color:${brandDark};text-decoration:none;">${safeEmail}</a>`)}
                          ${infoRow("Received", submittedAt, true)}
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Message -->
              <tr>
                <td style="padding:24px 32px 4px;">
                  <p style="margin:0 0 10px;font-size:11px;letter-spacing:1.2px;text-transform:uppercase;color:#94a3b8;">Message</p>
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border:1px solid #eef2f6;border-left:4px solid ${brand};border-radius:12px;">
                    <tr>
                      <td style="padding:20px 22px;font-size:15px;line-height:1.7;color:${ink};">${safeMessage}</td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Action -->
              <tr>
                <td align="center" style="padding:28px 32px 36px;">
                  <a href="mailto:${safeEmail}" style="display:inline-block;background:linear-gradient(135deg,${brand},${brandDark});color:#ffffff;font-size:15px;font-weight:bold;text-decoration:none;padding:14px 36px;border-radius:10px;box-shadow:0 8px 18px rgba(28,156,214,0.30);">Reply to ${safeName}</a>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td align="center" style="padding:24px 32px;background-color:#f8fafc;border-top:1px solid #eef2f6;">
                  <p style="margin:0;font-size:14px;font-weight:bold;color:${brandDark};letter-spacing:1px;">RESTORE PHYSICAL THERAPY</p>
                  <p style="margin:8px 0 0;font-size:12px;line-height:1.7;color:#94a3b8;">571 Stanislaus Ave. Suite F. Angels Camp. CA. 95222.<br />This is an automated notification from your website contact form — reply directly to respond to ${safeName}.</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>
  `;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
