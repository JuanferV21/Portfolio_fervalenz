import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the request body
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          error: 'Validation failed',
          details: result.error.issues
        },
        { status: 400 }
      );
    }

    const { name, email, company, message } = result.data;

    // Create nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER || 'fervalenz0203@gmail.com',
        pass: process.env.EMAIL_PASS || 'dhzg sqjt lqnb shvu'
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    console.log('Attempting to send email with config:', {
      user: process.env.EMAIL_USER || 'fervalenz0203@gmail.com',
      hasPassword: !!(process.env.EMAIL_PASS || 'dhzg sqjt lqnb shvu')
    });

    // Test the connection
    try {
      await transporter.verify();
      console.log('SMTP connection verified successfully');
    } catch (verifyError) {
      console.error('SMTP connection verification failed:', verifyError);
      throw new Error(`SMTP verification failed: ${verifyError}`);
    }

    // Email content
    const mailOptions = {
      from: '"Portfolio Contact Form" <fervalenz0203@gmail.com>',
      to: 'fervalenz0203@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff; border: 2px solid #000000;">
          <div style="background-color: #000000; color: #ffffff; padding: 20px; margin: -20px -20px 20px -20px;">
            <h1 style="margin: 0; font-size: 24px; font-weight: 300; text-transform: uppercase; letter-spacing: 2px;">
              New Contact Form Message
            </h1>
          </div>

          <div style="background-color: #f5f5f5; padding: 15px; margin-bottom: 20px; border: 1px solid #e5e5e5;">
            <h2 style="margin: 0 0 10px 0; font-size: 14px; font-weight: 500; text-transform: uppercase; letter-spacing: 1px; color: #404040;">
              Contact Information
            </h2>
            <p style="margin: 5px 0; color: #262626;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 5px 0; color: #262626;"><strong>Email:</strong> ${email}</p>
            ${company ? `<p style="margin: 5px 0; color: #262626;"><strong>Company:</strong> ${company}</p>` : ''}
          </div>

          <div style="background-color: #fafafa; padding: 15px; border: 1px solid #e5e5e5;">
            <h2 style="margin: 0 0 15px 0; font-size: 14px; font-weight: 500; text-transform: uppercase; letter-spacing: 1px; color: #404040;">
              Message
            </h2>
            <div style="background-color: #ffffff; padding: 15px; border-left: 4px solid #000000; color: #262626; line-height: 1.6;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e5e5; color: #737373; font-size: 12px; text-align: center;">
            <p style="margin: 0;">This email was sent from your portfolio contact form.</p>
            <p style="margin: 5px 0 0 0;">Please reply directly to ${email} to respond to ${name}.</p>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
${company ? `Company: ${company}` : ''}

Message:
${message}

---
This email was sent from your portfolio contact form.
Reply directly to ${email} to respond to ${name}.
      `,
      replyTo: email
    };

    // Send the email
    console.log('Sending email to:', mailOptions.to);
    const emailResult = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', emailResult.messageId);

    return NextResponse.json(
      {
        message: 'Email sent successfully',
        success: true,
        messageId: emailResult.messageId
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Email sending error:', error);

    return NextResponse.json(
      {
        error: 'Failed to send email',
        message: 'There was an error processing your request. Please try again later.',
        success: false
      },
      { status: 500 }
    );
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}