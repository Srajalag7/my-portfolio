
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { Client } from "https://deno.land/x/mailjet@v0.1.0/mod.ts";

const MAILJET_API_KEY = Deno.env.get("MAILJET_API_KEY") || "";
const MAILJET_SECRET_KEY = Deno.env.get("MAILJET_SECRET_KEY") || "";
const PORTFOLIO_EMAIL = Deno.env.get("PORTFOLIO_EMAIL") || "";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
  "Access-Control-Max-Age": "86400",
};

serve(async (req) => {
  console.log("Received request to send-email function");
  
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    console.log("Handling OPTIONS request for CORS preflight");
    return new Response(null, {
      status: 204,
      headers: corsHeaders,
    });
  }

  try {
    const { name, email, message, subject } = await req.json();
    console.log(`Processing email request for ${name} (${email})`);

    // Initialize Mailjet client
    const mailjet = new Client({
      apiKey: MAILJET_API_KEY,
      apiSecret: MAILJET_SECRET_KEY,
    });

    // Send email to the visitor
    console.log("Sending confirmation email to visitor");
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
    console.log("Visitor email sent successfully");

    // Send notification email to portfolio owner
    console.log("Sending notification email to portfolio owner");
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
    console.log("Owner notification email sent successfully");

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
    console.error("Error in send-email function:", error);
    
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
});
