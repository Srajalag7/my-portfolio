
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { Client } from "https://deno.land/x/mailjet@v0.1.0/mod.ts";

const MAILJET_API_KEY = Deno.env.get("MAILJET_API_KEY") || "";
const MAILJET_SECRET_KEY = Deno.env.get("MAILJET_SECRET_KEY") || "";
const PORTFOLIO_EMAIL = Deno.env.get("PORTFOLIO_EMAIL") || "";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, {
      headers: corsHeaders,
    });
  }

  try {
    const { name, email, message, subject } = await req.json();

    // Initialize Mailjet client
    const mailjet = new Client({
      apiKey: MAILJET_API_KEY,
      apiSecret: MAILJET_SECRET_KEY,
    });

    // Send email to the visitor
    const visitorResponse = await mailjet.sendEmail({
      Messages: [
        {
          From: {
            Email: PORTFOLIO_EMAIL,
            Name: "Portfolio Website",
          },
          To: [
            {
              Email: email,
              Name: name,
            },
          ],
          Subject: "Thank you for your message",
          TextPart: `Dear ${name},\n\nThank you for reaching out. I have received your message and will get back to you as soon as possible.\n\nBest regards,`,
          HTMLPart: `
            <h3>Thank you for your message</h3>
            <p>Dear ${name},</p>
            <p>Thank you for reaching out. I have received your message and will get back to you as soon as possible.</p>
            <p>Best regards,</p>
          `,
        },
      ],
    });

    // Send notification email to portfolio owner
    const ownerResponse = await mailjet.sendEmail({
      Messages: [
        {
          From: {
            Email: PORTFOLIO_EMAIL,
            Name: "Portfolio Website",
          },
          To: [
            {
              Email: PORTFOLIO_EMAIL,
              Name: "Portfolio Owner",
            },
          ],
          Subject: `New Contact Form Submission: ${subject}`,
          TextPart: `New message from ${name} (${email}):\n\n${message}`,
          HTMLPart: `
            <h3>New Contact Form Submission</h3>
            <p><strong>From:</strong> ${name} (${email})</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
          `,
        },
      ],
    });

    return new Response(
      JSON.stringify({ 
        success: true, 
        visitorEmail: visitorResponse,
        ownerEmail: ownerResponse
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
});
