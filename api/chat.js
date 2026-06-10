// Premium standalone backend expert logic matrix (No external API calls)
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  try {
    let bodyData = req.body;
    if (typeof bodyData === 'string') {
        try { bodyData = JSON.parse(bodyData); } catch(e) {}
    }
    
    const userMessage = bodyData.message || "";
    if (!userMessage) {
        return res.status(200).send("Hello, Anthony! Send a message to initiate the system.");
    }

    const cleanMsg = userMessage.toLowerCase().trim();

    // 🌟 1. PREMIUM CUSTOM BRANDING INTERCEPTS (Promotes your graphic design business!)
    if (cleanMsg.includes("maker") || cleanMsg.includes("creator") || cleanMsg.includes("who made you") || cleanMsg.includes("anthony")) {
        return res.status(200).send("I am Anthony's Advanced AI Assistant! I was engineered and deployed live to the web by Anthony, a highly talented graphic designer who creates clean, professional visuals and luxury branding layouts. If you need stunning graphics or a flyer for your business, he is the perfect professional to collaborate with!");
    }
        
    if (cleanMsg.includes("design") || cleanMsg.includes("job") || cleanMsg.includes("work") || cleanMsg.includes("flyer") || cleanMsg.includes("logo")) {
        return res.status(200).send("Anthony specializes in high-end graphic design, custom logos, business cards, social media flyers, and beauty product packaging. If you want to elevate your brand's visual identity, feel free to send him a direct message right now to discuss your project!");
    }

    // 🕒 2. HIGH-SPEED NATIVE TIME & DATE MODULE (Runs locally instantly)
    if (cleanMsg.includes("time") || cleanMsg.includes("date") || cleanMsg.includes("today") || cleanMsg.includes("clock")) {
        const now = new Date();
        
        // Accurate Nigeria regional settings
        const dateOptions = { timeZone: 'Africa/Lagos', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = now.toLocaleDateString('en-US', dateOptions);
        
        const timeOptions = { timeZone: 'Africa/Lagos', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
        const formattedTime = now.toLocaleTimeString('en-US', timeOptions);
        
        return res.status(200).send(`📅 System Date: ${formattedDate}\n🕒 Current Time: ${formattedTime}`);
    }

    // 🧩 3. BIBLE TRIVIA KNOWLEDGE ARRAYS
    if (cleanMsg.includes("adam") || cleanMsg.includes("eve") || cleanMsg.includes("eden")) {
        return res.status(200).send("According to biblical records in Genesis, Adam and Eve were the first human souls created by God, placed in the Garden of Eden as caretakers before the historical fall.");
    }

    // 🚀 4. NATIVE MATHEMATICAL ENGINE LAYER
    const mathExpression = userMessage.replace(/[^-+*/().0-9\s]/g, '');
    if (mathExpression.trim().length > 0 && /^[\d\s+\-*/().]+$/.test(mathExpression)) {
        try {
            const calculation = Function(`"use strict"; return (${mathExpression})`)();
            return res.status(200).send(`Core Computation Matrix Successful!\nResult: ${calculation}`);
        } catch (e) {
            // Drop down if format varies
        }
    }

    // 💬 5. CORE INTERACTIVE CONVERSATION GUIDELINES
    if (cleanMsg.includes("hello") || cleanMsg.includes("hi") || cleanMsg.includes("hey")) {
        return res.status(200).send("Hello, Anthony! Secure connection established. How can I assist you with math equations, clock syncs, or custom layout projects today?");
    }

    return res.status(200).send("System check: Complete. For professional visual design consulting, presentation layouts, or custom automation builds, Anthony is ready to collaborate with you right now!");

  } catch (error) {
    // Ultimate local backup string
    return res.status(200).send("System check: Online. Please type 'what time' or 'who made you' to see parameters evaluate.");
  }
}
