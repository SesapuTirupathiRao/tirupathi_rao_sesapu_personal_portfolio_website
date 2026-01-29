
// /api/start-learning.js
import { createClient } from "@supabase/supabase-js";

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
    return res.status(200).json({ message: "Success" });
}
