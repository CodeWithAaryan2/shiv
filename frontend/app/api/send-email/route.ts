import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, data } = body;

    console.log('📧 Received email request for type:', type);
    console.log('📧 Email data:', JSON.stringify(data, null, 2));

    // Validate required fields
    if (!type || !data) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields: type and data' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    let subject = '';
    let htmlContent = '';
    let textContent = '';

    if (type === 'contact') {
      // Validate contact form data
      if (!data.name || !data.email || !data.message) {
        return NextResponse.json(
          { success: false, message: 'Missing required fields for contact form' },
          { status: 400 }
        );
      }

      subject = `📧 New Contact Form Submission - ${data.name}`;
      
      htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f5f5f5;
        }
        .container {
            background: white;
            border-radius: 10px;
            padding: 30px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            border: 1px solid #ddd;
        }
        .header {
            background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
            color: white;
            padding: 25px;
            border-radius: 10px 10px 0 0;
            margin: -30px -30px 30px -30px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: 700;
        }
        .header p {
            margin: 10px 0 0 0;
            opacity: 0.9;
        }
        .info-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-bottom: 30px;
        }
        .info-item {
            background: #f8fafc;
            padding: 20px;
            border-radius: 8px;
            border-left: 4px solid #3b82f6;
        }
        .label {
            font-weight: 600;
            color: #4b5563;
            font-size: 14px;
            margin-bottom: 8px;
            display: block;
        }
        .value {
            color: #111827;
            font-size: 16px;
            font-weight: 500;
        }
        .message-box {
            background: #eff6ff;
            padding: 25px;
            border-radius: 8px;
            border: 1px solid #dbeafe;
            margin: 25px 0;
        }
        .message-box .label {
            color: #1d4ed8;
            font-size: 16px;
            margin-bottom: 15px;
        }
        .message-content {
            white-space: pre-wrap;
            line-height: 1.8;
            color: #374151;
            background: white;
            padding: 15px;
            border-radius: 6px;
            border: 1px solid #e5e7eb;
        }
        .footer {
            margin-top: 35px;
            padding-top: 25px;
            border-top: 2px solid #e5e7eb;
            text-align: center;
            color: #6b7280;
            font-size: 14px;
        }
        .highlight {
            background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
            padding: 20px;
            border-radius: 8px;
            border: 2px solid #f59e0b;
            margin: 25px 0;
            text-align: center;
        }
        .highlight strong {
            color: #92400e;
        }
        .timestamp {
            text-align: center;
            color: #9ca3af;
            font-size: 13px;
            margin-top: 25px;
            padding: 15px;
            background: #f9fafb;
            border-radius: 6px;
            border: 1px solid #e5e7eb;
        }
        .icon {
            font-size: 18px;
            margin-right: 8px;
            vertical-align: middle;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>📧 New Contact Form Submission</h1>
            <p>Shiv Enterprises Website</p>
        </div>
        
        <div class="highlight">
            <strong>⚠️ ACTION REQUIRED:</strong> Please respond to this inquiry within <strong>24 hours</strong>
        </div>
        
        <div class="info-grid">
            <div class="info-item">
                <span class="label"><span class="icon">👤</span>Contact Person</span>
                <span class="value">${data.name || 'Not provided'}</span>
            </div>
            <div class="info-item">
                <span class="label"><span class="icon">📧</span>Email Address</span>
                <span class="value">${data.email || 'Not provided'}</span>
            </div>
            <div class="info-item">
                <span class="label"><span class="icon">📞</span>Phone Number</span>
                <span class="value">${data.phone || 'Not provided'}</span>
            </div>
            <div class="info-item">
                <span class="label"><span class="icon">🏢</span>Company</span>
                <span class="value">${data.company || 'Not provided'}</span>
            </div>
            <div class="info-item" style="grid-column: span 2;">
                <span class="label"><span class="icon">🏗️</span>Project Type</span>
                <span class="value">${data.projectType || 'Not specified'}</span>
            </div>
        </div>
        
        <div class="message-box">
            <span class="label"><span class="icon">💬</span>Message Details</span>
            <div class="message-content">
                ${data.message || 'No message provided'}
            </div>
        </div>
        
        <div class="footer">
            <p>🔒 This message was sent securely from Shiv Enterprises contact form</p>
            <p>📍 Form submitted from: Website Contact Page</p>
            <p>📊 Lead Source: Website Contact Form</p>
        </div>
        
        <div class="timestamp">
            <span class="icon">📅</span>Submitted on: ${new Date().toLocaleString('en-IN', {
                timeZone: 'Asia/Kolkata',
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            })}
        </div>
    </div>
</body>
</html>`;

      textContent = `===========================================
📧 NEW CONTACT FORM SUBMISSION - SHIV ENTERPRISES
===========================================

👤 CONTACT PERSON: ${data.name || 'Not provided'}
📧 EMAIL: ${data.email || 'Not provided'}
📞 PHONE: ${data.phone || 'Not provided'}
🏢 COMPANY: ${data.company || 'Not provided'}
🏗️ PROJECT TYPE: ${data.projectType || 'Not specified'}

💬 MESSAGE:
${data.message || 'No message provided'}

===========================================
📅 SUBMITTED ON: ${new Date().toLocaleString('en-IN')}
📍 SOURCE: Shiv Enterprises Website Contact Form
🔒 SECURE SUBMISSION

⚠️ ACTION REQUIRED: Please respond within 24 hours
===========================================`;

    } else if (type === 'quote') {
      // Validate quote form data
      if (!data.projectName || !data.description || !data.contactName || !data.contactEmail) {
        return NextResponse.json(
          { success: false, message: 'Missing required fields for quote form' },
          { status: 400 }
        );
      }

      subject = `💰 New Quote Request - ${data.projectName}`;
      
      htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Quote Request</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f5f5f5;
        }
        .container {
            background: white;
            border-radius: 10px;
            padding: 30px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            border: 1px solid #ddd;
        }
        .header {
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            color: white;
            padding: 25px;
            border-radius: 10px 10px 0 0;
            margin: -30px -30px 30px -30px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: 700;
        }
        .header p {
            margin: 10px 0 0 0;
            opacity: 0.9;
        }
        .project-summary {
            background: #f0fdf4;
            padding: 25px;
            border-radius: 10px;
            border: 2px solid #86efac;
            margin-bottom: 30px;
        }
        .project-summary h2 {
            color: #065f46;
            margin: 0 0 20px 0;
            font-size: 24px;
        }
        .detail-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        }
        .detail-item {
            padding: 15px;
            background: white;
            border-radius: 8px;
            border: 1px solid #d1fae5;
        }
        .detail-label {
            font-weight: 600;
            color: #047857;
            font-size: 14px;
            margin-bottom: 8px;
            display: block;
        }
        .detail-value {
            color: #111827;
            font-size: 16px;
            font-weight: 500;
        }
        .budget-timeline {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 25px;
            margin: 30px 0;
        }
        .budget-box, .timeline-box {
            padding: 25px;
            border-radius: 10px;
            text-align: center;
            border-top: 5px solid;
        }
        .budget-box {
            background: #fffbeb;
            border-color: #f59e0b;
        }
        .timeline-box {
            background: #eff6ff;
            border-color: #3b82f6;
        }
        .amount {
            font-size: 28px;
            font-weight: 800;
            margin: 15px 0;
        }
        .budget-amount {
            color: #b45309;
        }
        .timeline-value {
            color: #1e40af;
        }
        .description-box {
            background: #f8fafc;
            padding: 25px;
            border-radius: 10px;
            border: 1px solid #e2e8f0;
            margin: 30px 0;
        }
        .description-label {
            color: #1e293b;
            font-weight: 700;
            font-size: 18px;
            margin-bottom: 15px;
            display: block;
        }
        .description-content {
            white-space: pre-wrap;
            line-height: 1.8;
            color: #475569;
            background: white;
            padding: 20px;
            border-radius: 8px;
            border: 1px solid #e2e8f0;
        }
        .contact-info {
            background: #fef3c7;
            padding: 25px;
            border-radius: 10px;
            border: 2px solid #fbbf24;
            margin: 30px 0;
        }
        .contact-info h3 {
            color: #92400e;
            margin: 0 0 20px 0;
        }
        .urgent-badge {
            display: inline-block;
            background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
            color: white;
            padding: 12px 25px;
            border-radius: 25px;
            font-weight: 700;
            font-size: 16px;
            margin: 25px auto;
            text-align: center;
            box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
        }
        .footer {
            margin-top: 35px;
            padding-top: 25px;
            border-top: 2px solid #e5e7eb;
            text-align: center;
            color: #6b7280;
            font-size: 14px;
        }
        .timestamp {
            text-align: center;
            color: #9ca3af;
            font-size: 13px;
            margin-top: 25px;
            padding: 15px;
            background: #f9fafb;
            border-radius: 6px;
            border: 1px solid #e5e7eb;
        }
        .icon {
            font-size: 18px;
            margin-right: 8px;
            vertical-align: middle;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>💰 New Quote Request</h1>
            <p>Shiv Enterprises Website</p>
        </div>
        
        <div class="project-summary">
            <h2><span class="icon">🏗️</span>${data.projectName || 'Unnamed Project'}</h2>
            <div class="detail-grid">
                <div class="detail-item">
                    <span class="detail-label"><span class="icon">📍</span>Location</span>
                    <span class="detail-value">${data.projectLocation || 'Not specified'}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label"><span class="icon">📋</span>Project Type</span>
                    <span class="detail-value">${data.projectType || 'Not specified'}</span>
                </div>
            </div>
        </div>
        
        <div class="budget-timeline">
            <div class="budget-box">
                <span class="detail-label"><span class="icon">💰</span>Budget Range</span>
                <div class="amount budget-amount">${data.budgetRange || 'Not specified'}</div>
                <small>Estimated Project Budget</small>
            </div>
            <div class="timeline-box">
                <span class="detail-label"><span class="icon">⏰</span>Timeline</span>
                <div class="amount timeline-value">${data.timeline || 'Not specified'}</div>
                <small>Project Duration</small>
            </div>
        </div>
        
        <div class="description-box">
            <span class="description-label"><span class="icon">📝</span>Project Description</span>
            <div class="description-content">
                ${data.description || 'No description provided'}
            </div>
        </div>
        
        <div class="contact-info">
            <h3><span class="icon">👤</span>Contact Information</h3>
            <div class="detail-grid">
                <div class="detail-item">
                    <span class="detail-label">Contact Person</span>
                    <span class="detail-value">${data.contactName || 'Not provided'}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Email Address</span>
                    <span class="detail-value">${data.contactEmail || 'Not provided'}</span>
                </div>
            </div>
        </div>
        
        <div class="urgent-badge">
            ⚡ URGENT: Quote Required Within 24 Hours
        </div>
        
        <div class="footer">
            <p>📊 Lead Source: Website Quote Form</p>
            <p>🔐 This is a secure quote request from Shiv Enterprises website</p>
            <p>🎯 Priority: High - Immediate attention required</p>
        </div>
        
        <div class="timestamp">
            <span class="icon">📅</span>Requested on: ${new Date().toLocaleString('en-IN', {
                timeZone: 'Asia/Kolkata',
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            })}
        </div>
    </div>
</body>
</html>`;

      textContent = `===========================================
💰 NEW QUOTE REQUEST - SHIV ENTERPRISES
===========================================

🏗️ PROJECT: ${data.projectName || 'Unnamed Project'}
📍 LOCATION: ${data.projectLocation || 'Not specified'}
📋 TYPE: ${data.projectType || 'Not specified'}

💰 BUDGET RANGE: ${data.budgetRange || 'Not specified'}
⏰ TIMELINE: ${data.timeline || 'Not specified'}

📝 PROJECT DESCRIPTION:
${data.description || 'No description provided'}

===========================================
👤 CONTACT INFORMATION:
Name: ${data.contactName || 'Not provided'}
Email: ${data.contactEmail || 'Not provided'}

===========================================
📅 REQUESTED ON: ${new Date().toLocaleString('en-IN')}
📍 SOURCE: Shiv Enterprises Quote Form
⚡ PRIORITY: URGENT - Quote required within 24 hours
📊 LEAD SOURCE: Website Quote Form

⚠️ ACTION REQUIRED: Please prepare and send quote within 24 hours
===========================================`;
    } else {
      return NextResponse.json(
        { success: false, message: 'Invalid type. Use "contact" or "quote"' },
        { status: 400 }
      );
    }

    // Create email options
    const mailOptions = {
      from: `"Shiv Enterprises" <${process.env.EMAIL_USER}>`,
      to: 'shiventerprises3366@gmail.com',
      replyTo: data.email || data.contactEmail || process.env.EMAIL_USER,
      subject: subject,
      text: textContent,
      html: htmlContent,
      headers: {
        'X-Priority': '1',
        'X-MSMail-Priority': 'High',
        'Importance': 'high',
        'X-Mailer': 'Shiv Enterprises Contact Form'
      }
    };

    console.log('📤 Sending email to: shiventerprises3366@gmail.com');
    console.log('📝 Subject:', subject);
    
    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully! Message ID:', info.messageId);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Email sent successfully',
        subject: subject,
        messageId: info.messageId,
        previewUrl: nodemailer.getTestMessageUrl(info)
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('❌ Email sending error:', error);
    console.error('❌ Error details:', {
      message: error.message,
      code: error.code,
      response: error.response
    });

    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to send email',
        error: error.message,
        code: error.code,
        details: error.response || 'No additional details'
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    status: 'Email API is running',
    instructions: 'Send POST request with {type: "contact"|"quote", data: {...}}',
    environment: {
      hasEmailUser: !!process.env.EMAIL_USER,
      emailUser: process.env.EMAIL_USER ? `${process.env.EMAIL_USER.substring(0, 3)}...` : 'Not set',
      nodeEnv: process.env.NODE_ENV
    }
  });
}