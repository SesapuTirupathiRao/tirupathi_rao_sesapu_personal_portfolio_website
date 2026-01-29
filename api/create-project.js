import { createClient } from "@supabase/supabase-js";

export default async function handler(req, res) {
    if (req.method !== "POST")
        return res.status(405).json({ error: "Only POST allowed" });

    const { fullName, email, projectTitle, techStack, description } =
        req.body || {};

    const supabase = createClient(
        process.env.SUPABASE_URL,
        process.env.SUPABASE_SERVICE_ROLE
    );

    const { error } = await supabase.from("create_project_requests").insert([
        {
            full_name: fullName,
            email,
            project_title: projectTitle,
            tech_stack: techStack,
            description,
        },
    ]);

    if (error) {
        console.error("Insert Error:", error);
        return res.status(500).json({ error: "Failed to save request" });
    }

    return res.status(200).json({ success: true });
}