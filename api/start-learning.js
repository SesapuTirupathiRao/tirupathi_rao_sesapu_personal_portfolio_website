// /api/start-learning.js
import { createClient } from "@supabase/supabase-js";
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Only POST requests allowed" });

  const { fullName, email, mobile, course, goals } = req.body || {};

  // 1) Insert into Supabase
  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE
  );

  const { error: dbErr } = await supabase
    .from("start_learning_with_me")
    .insert([{ full_name: fullName, email, mobile, course, goals }]);

  if (dbErr) {
    console.error("Supabase Insert Error:", dbErr);
    return res.status(500).json({ error: "Database insert failed", dbErr });
  }

  // 2) Send email via Brevo SMTP
  const transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER, // e.g. 90edfd001@smtp-brevo.com
      pass: process.env.SMTP_PASS, // Brevo SMTP master password (not API key)
    },
  });

  const mailOptions = {
    from: `"Tirupathi Rao Sesapu" <${process.env.SMTP_USER}>`, // Sender email (verified in Brevo)
    to: "tirupathiraosesapu@gmail.com", // Receiver email
    subject: `New “Start Learning” request – ${fullName}`,
    html: `
      <h2>Start Learning with Me – New Submission</h2>
      <p><b>Name:</b> ${fullName}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Mobile:</b> ${mobile}</p>
      <p><b>Course:</b> ${course}</p>
      <p><b>Goals:</b> ${goals}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Email Error:", err);
    return res.status(500).json({ error: "Email sending failed", err });
  }
}
