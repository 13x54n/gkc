"use server"

import nodemailer from "nodemailer"

type EmailData = {
    name: string
    email: string
    phone: string
    subject: string
    message: string
}

export async function sendEmail(data: EmailData) {
    try {
        // Create a transporter
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_SERVER || "smtp.gmail.com",
            port: Number.parseInt(process.env.EMAIL_PORT || "587"),
            secure: process.env.EMAIL_SECURE === "true",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            },
        })

        // Verify connection
        await transporter.verify()

        // Set up email data
        const mailOptions = {
            from: process.env.EMAIL_FROM || `"Contact Form" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_TO || process.env.EMAIL_USER,
            replyTo: data.email,
            subject: `Contact Form: ${data.subject || "New Message"}`,
            text: `
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || "Not provided"}

Subject: ${data.subject || "Not provided"}

Message:
${data.message}
      `,
            html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #333;">New Contact Form Submission</h2>
  <table style="width: 100%; border-collapse: collapse;">
    <tr>
      <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Name:</td>
      <td style="padding: 8px; border-bottom: 1px solid #eee;">${data.name}</td>
    </tr>
    <tr>
      <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
      <td style="padding: 8px; border-bottom: 1px solid #eee;">${data.email}</td>
    </tr>
    <tr>
      <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Phone:</td>
      <td style="padding: 8px; border-bottom: 1px solid #eee;">${data.phone || "Not provided"}</td>
    </tr>
    <tr>
      <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Subject:</td>
      <td style="padding: 8px; border-bottom: 1px solid #eee;">${data.subject || "Not provided"}</td>
    </tr>
  </table>
  <div style="margin-top: 20px;">
    <h3 style="color: #555;">Message:</h3>
    <div style="background-color: #f9f9f9; padding: 15px; border-radius: 4px; white-space: pre-line;">${data.message}</div>
  </div>
</div>
      `,
        }

        // Send email
        const info = await transporter.sendMail(mailOptions)

        return {
            success: true,
            messageId: info.messageId,
        }
    } catch (error) {
        console.error("Error sending email:", error)
        return {
            success: false,
            error: error instanceof Error ? error.message : "Failed to send email",
        }
    }
}

