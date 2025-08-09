import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendEmail } from "./sendgrid";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { firstName, lastName, email, subject, message } = req.body;

      if (!firstName || !lastName || !email || !subject || !message) {
        return res.status(400).json({ error: "All fields are required" });
      }

      // Log the contact form submission to console for now
      console.log('\n=== NEW CONTACT FORM SUBMISSION ===');
      console.log(`Name: ${firstName} ${lastName}`);
      console.log(`Email: ${email}`);
      console.log(`Subject: ${subject}`);
      console.log(`Message: ${message}`);
      console.log('=====================================\n');

      // Try to send email via SendGrid, but don't fail if it doesn't work
      try {
        await sendEmail({
          to: "business@cujoqt.com",
          from: "business@cujoqt.com",
          subject: `Contact Form: ${subject}`,
          text: `New contact form submission:\n\nName: ${firstName} ${lastName}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <br>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
          `
        });
        console.log('✅ Email sent successfully via SendGrid');
      } catch (emailError) {
        console.log('⚠️ SendGrid email failed, but form submission logged above');
      }

      // Always return success since we're logging the submission
      res.json({ 
        success: true, 
        message: "Message received successfully! I'll get back to you soon." 
      });

    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
