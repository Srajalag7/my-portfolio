import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { corsHeaders } from '../_shared/cors.ts';

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
const PORTFOLIO_EMAIL = Deno.env.get('PORTFOLIO_EMAIL');

const createUserEmailTemplate = (name: string, message: string, siteOwner: string) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank you for contacting</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333333;
      text-align: left;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      background-color: #4F46E5;
      padding: 20px;
      text-align: center;
      color: white;
    }
    .content {
      padding: 20px;
      background-color: #ffffff;
      border: 1px solid #eeeeee;
    }
    .footer {
      text-align: center;
      padding: 10px;
      font-size: 12px;
      color: #888888;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Thank You for Your Message</h1>
    </div>
    <div class="content">
      <p>Hello ${name},</p>
      <p>Thank you for contacting. I've received your message and will get back to you as soon as possible.</p>
      <p><strong>Your message:</strong></p>
      <p style="padding: 10px; background-color: #f9f9f9; border-left: 4px solid #4F46E5;">${message}</p>
      <p>Best regards,<br>${siteOwner}</p>
    </div>
    <div class="footer">
      <p>This is an automated message. Please do not reply to this email.</p>
    </div>
  </div>
</body>
</html>
`;

const createOwnerEmailTemplate = (name: string, email: string, subject: string, message: string) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>You have received a new message from your website</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333333;
      text-align: left;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      background-color: #4F46E5;
      padding: 20px;
      text-align: center;
      color: white;
    }
    .content {
      padding: 20px;
      background-color: #ffffff;
      border: 1px solid #eeeeee;
    }
    .footer {
      text-align: center;
      padding: 10px;
      font-size: 12px;
      color: #888888;
    }
    .contact-info {
      background-color: #f9f9f9;
      padding: 15px;
      margin-bottom: 15px;
      border-radius: 4px;
    }
    .message-content {
      padding: 15px;
      background-color: #f9f9f9;
      border-left: 4px solid #4F46E5;
      margin-top: 15px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Contact Form Submission</h1>
    </div>
    <div class="content">
      <p>You have received a new message from your website:</p>
      
      <div class="contact-info">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
      </div>
      
      <p><strong>Message:</strong></p>
      <div class="message-content">
        <p>${message}</p>
      </div>
    </div>
    <div class="footer">
      <p>This message was sent from your portfolio contact form.</p>
    </div>
  </div>
</body>
</html>
`;

serve(async (req) => {
  // Handle CORS
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      headers: corsHeaders,
    });
  }

  try {
    const { name, email, subject, message, siteOwner = 'Srajal Agrawal', ownerEmail = 'agrawalsrajal2012@gmail.com' } = await req.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Name, email, and message are required' }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json',
          },
        }
      );
    }

    const formattedSubject = subject || 'Message from your portfolio website';

    if (!RESEND_API_KEY) {
      return new Response(
        JSON.stringify({ error: 'Resend API key is missing' }),
        {
          status: 500,
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json',
          },
        }
      );
    }

    // Send confirmation email to user
    const userEmailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: `${siteOwner} <${PORTFOLIO_EMAIL || ownerEmail}>`,
        to: [email],
        subject: 'Thank you for your message',
        html: createUserEmailTemplate(name, message, siteOwner),
      }),
    });

    if (!userEmailResponse.ok) {
      const userError = await userEmailResponse.text();
      console.error('Error sending user email:', userError);
    }

    // Send notification email to site owner
    const ownerEmailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: `${siteOwner} <${PORTFOLIO_EMAIL || ownerEmail}>`,
        to: [ownerEmail],
        subject: `New Contact Form: ${formattedSubject}`,
        html: createOwnerEmailTemplate(name, email, formattedSubject, message),
      }),
    });

    if (!ownerEmailResponse.ok) {
      const ownerError = await ownerEmailResponse.text();
      console.error('Error sending owner email:', ownerError);
    }

    return new Response(
      JSON.stringify({ success: true }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Error processing request:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to send email' }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  }
});
