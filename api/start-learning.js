// /api/start-learning.js  ─ Vercel Serverless Function
import { createClient } from "@supabase/supabase-js";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Only POST" });

  const { fullName, email, mobile, course, goals } = req.body || {};

  // 1) Save to Supabase
  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE // use service‑role key for inserts
  );

  const { error: dbErr } = await supabase
    .from("learn_requests")
    .insert([{ full_name: fullName, email, mobile, course, goals }]);

  if (dbErr) return res.status(500).json({ error: "DB insert failed", dbErr });

  // 2) Send email via Resend
  const emailResp = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Portfolio Bot <noreply@tirupathiraosesapu.vercel.com>", // verified sender
      to: "tirupathiraosesapu@gmail.com",
      subject: `New “Start Learning” request – ${fullName}`,
      html: `
        <h2>Start Learning with Me – New Submission</h2>
        <p><b>Name:</b> ${fullName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Mobile:</b> ${mobile}</p>
        <p><b>Course:</b> ${course}</p>
        <p><b>Goals:</b> ${goals}</p>
      `,
    }),
  });

  if (!emailResp.ok) {
    const err = await emailResp.text();
    return res.status(500).json({ error: "Email failed", err });
  }

  return res.status(200).json({ success: true });
}
