
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY") || "";
const PORTFOLIO_EMAIL = Deno.env.get("PORTFOLIO_EMAIL") || "";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
  "Access-Control-Max-Age": "86400",
};

const resend = new Resend(RESEND_API_KEY);

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: corsHeaders,
    });
  }

  try {
    const { name, email, message, subject } = await req.json();

    // Send confirmation email to visitor
    const visitorResponse = await resend.emails.send({
      from: `Portfolio <${PORTFOLIO_EMAIL}>`,
      to: [email],
      subject: "Thank you for your message",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <title>Thank you for your message</title>
          <style>
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .email-container {
              border: 1px solid #e0e0e0;
              border-radius: 8px;
              padding: 20px;
              background-color: #ffffff;
            }
            .header {
              text-align: center;
              padding-bottom: 20px;
              border-bottom: 1px solid #e0e0e0;
              margin-bottom: 20px;
            }
            .header h2 {
              color: #4f46e5;
              margin: 0;
            }
            .content {
              padding: 20px 0;
            }
            .footer {
              text-align: center;
              padding-top: 20px;
              border-top: 1px solid #e0e0e0;
              margin-top: 20px;
              color: #666;
              font-size: 14px;
            }
          </style>
        </head>
        <body>
          <div class="email-container">
            <div class="header">
              <h2>Thank You for Reaching Out</h2>
            </div>
            <div class="content">
              <p>Dear ${name},</p>
              <p>Thank you for contacting me. I've received your message and will get back to you as soon as possible.</p>
              <p>Here's a confirmation of what you sent:</p>
              <p><strong>Subject:</strong> ${subject}</p>
              <p><strong>Message:</strong> ${message}</p>
            </div>
            <div class="footer">
              <p>Best regards,</p>
              <p>Portfolio Owner</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    // Send notification email to portfolio owner
    const ownerResponse = await resend.emails.send({
      from: `Portfolio Contact <${PORTFOLIO_EMAIL}>`,
      to: [PORTFOLIO_EMAIL],
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <title>New Contact Form Submission</title>
          <style>
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .email-container {
              border: 1px solid #e0e0e0;
              border-radius: 8px;
              padding: 20px;
              background-color: #ffffff;
            }
            .header {
              padding-bottom: 20px;
              border-bottom: 1px solid #e0e0e0;
              margin-bottom: 20px;
            }
            .header h2 {
              color: #4f46e5;
              margin: 0;
            }
            .content {
              padding: 20px 0;
            }
            .message-box {
              background-color: #f9f9f9;
              padding: 15px;
              border-radius: 6px;
              margin-top: 10px;
              border-left: 4px solid #4f46e5;
            }
            .contact-details {
              margin-top: 20px;
              background-color: #f0f4ff;
              padding: 15px;
              border-radius: 6px;
            }
            .footer {
              text-align: center;
              padding-top: 20px;
              border-top: 1px solid #e0e0e0;
              margin-top: 20px;
              color: #666;
              font-size: 14px;
            }
          </style>
        </head>
        <body>
          <div class="email-container">
            <div class="header">
              <h2>New Contact Form Submission</h2>
            </div>
            <div class="content">
              <div class="contact-details">
                <p><strong>From:</strong> ${name} (${email})</p>
                <p><strong>Subject:</strong> ${subject}</p>
              </div>
              <p><strong>Message:</strong></p>
              <div class="message-box">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
            <div class="footer">
              <p>This message was sent from your portfolio contact form.</p>
            </div>
          </div>
        </body>
        </html>
      `,
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
