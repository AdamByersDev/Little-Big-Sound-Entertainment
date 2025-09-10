export const runtime = 'nodejs';

import nodemailer from 'nodemailer';
import escapeHtml from 'escape-html';

export const POST = async (request) => {
  try {
    const contentType = request.headers.get('content-type') || '';
    let formData;

    // Get form data based on whether it is json data or form data
    if (contentType.includes('application/json')) {
      formData = await request.json();
    } else {
      const rawFormData = await request.formData();
      formData = Object.fromEntries(rawFormData.entries());
    }

    const name = String(formData.name || '');
    const email = String(formData.email || '');
    const phone = String(formData.phone || '');
    const pack = String(formData.package || '');
    const info = String(formData.info || '');
    const toSender = String(formData['to-sender'] || '').toLowerCase();

    // Validate that name and email are provided
    if (!name || !email) {
      return Response.json(
        { ok: false, error: 'Both name and email are required.' },
        { status: 400 }
      );
    }

    // Validate email validity
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(email)) {
      return Response.json(
        { ok: false, error: 'The provided email is invalid.' },
        { status: 400 }
      );
    }

    // Set up email transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.purelymail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Escape html characters from user input
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safePack = escapeHtml(pack);
    const safeInfo = escapeHtml(info);
    const safeToSender = toSender === 'on' || toSender === 'true' || toSender === '1';

    // Generate email body
    const htmlMailBody = `
      <h1>Contact Form Submission</h1>
      <h2>Sent by ${safeName}</h2>
      <p>
        Supplied contact info:<br />
        <ul>
          <li>Email: <a href='mailto:${safeEmail}'>${safeEmail}</a></li>
          <li>Phone: ${safePhone? `<a href='tel:${safePhone}'>${safePhone}</a>` : 'Not provided'}</li>
        </ul>
      </p>
      <p>Chosen package: ${safePack || 'Not Selected'}</p>
      ${safeInfo && (`
        <p>Additional info:<br />
        ${safeInfo}</p>
      `)}
    `;

    // Send email to business
    const adminMail = {
      from: `"No Reply" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `${name} - Contact Form`,
      html: htmlMailBody
    };
    await transporter.sendMail(adminMail);

    // Send email to user if requested
    if (safeToSender) {
      const userMail = {
        from: `"No Reply" <${process.env.EMAIL_USER}>`,
        to: email,
        replyTo: 'info@littlebigsoundentertainment.ca',
        subject: `Contact Form Submission - Little Big Sound Entertainment`,
        html: htmlMailBody
      };
      await transporter.sendMail(userMail);
    }

    return Response.json({ ok: true });
  } catch (error) {
    // Catch other errors with safe client response
    console.error('Email failed to send:', error);
    return Response.json(
      { ok: false, error: 'Failed to send message. Please try again later.'},
      { status: 500 }
    );
  }
}
