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
    .from("start_learning_with_me")
    .insert([{ full_name: fullName, email, mobile, course, goals }]);

  if (dbErr) return res.status(500).json({ error: "DB insert failed", dbErr });

  // 3) Send simple fallback notification via FormSubmit.io
  const formSubmitResp = await fetch(
    "https://formsubmit.io/send/tirupathiraosesapu@gmail.com",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: fullName,
        email: email,
        mobile: mobile,
        course: course,
        goals: goals,
        _captcha: false, // disable captcha if you want
      }),
    }
  );

  // Optional: log or handle failure silently
  if (!formSubmitResp.ok) {
    const text = await formSubmitResp.text();
    console.error("FormSubmit email failed:", text);
  }

  return res.status(200).json({ success: true });
}
