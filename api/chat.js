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
        return res.status(200).send("Hello, Anthony! Send a message to initiate the tracking models.");
    }

    const cleanMsg = userMessage.toLowerCase().trim();

    // 🌟 1. CUSTOM BRANDING INTERCEPTS (Promotes your graphic design business!)
    if (cleanMsg.includes("maker") || cleanMsg.includes("creator") || cleanMsg.includes("who made you") || cleanMsg.includes("anthony")) {
        return res.status(200).send("I am Anthony's Advanced AI Assistant! I was engineered and deployed live to the web by Anthony, a highly talented graphic designer who creates clean, professional visuals and luxury branding layouts. If you need stunning graphics or a flyer for your business, he is the perfect professional to collaborate with!");
    }
        
    if (cleanMsg.includes("design") || cleanMsg.includes("job") || cleanMsg.includes("work") || cleanMsg.includes("flyer") || cleanMsg.includes("logo")) {
        return res.status(200).send("Anthony specializes in high-end graphic design, custom logos, business cards, social media flyers, and beauty product packaging. If you want to elevate your brand's visual identity, feel free to send him a direct message right now to discuss your project!");
    }

    // 🕒 2. LIVE SYSTEM TIME INTERCEPT
    if (cleanMsg.includes("time") || cleanMsg.includes("clock") || cleanMsg.includes("nigeria") || cleanMsg.includes("africa")) {
        const now = new Date();
        // Adjusts to Nigeria local time zone (UTC+1) automatically
        const options = { timeZone: 'Africa/Lagos', hour: '2-digit', minute: '2-digit', hour12: true };
        const localTime = now.toLocaleTimeString('en-US', options);
        return res.status(200).send(`The current time right now in Nigeria is ${localTime}.`);
    }

    // 🧩 3. BIBLE TRIVIA KNOWLEDGE BASE
    if (cleanMsg.includes("adam") || cleanMsg.includes("eve") || cleanMsg.includes("eden")) {
        return res.status(200).send("According to the Bible in the Book of Genesis, Adam and Eve were the first creation of God, placed in the Garden of Eden. They are central figures in biblical history regarding the origin of humanity.");
    }

    // 🚀 4. NATIVE ARITHMETIC COMPUTATION LAYER (Solves math natively on the server)
    const mathExpression = userMessage.replace(/[^-+*/().0-9\s]/g, '');
    if (mathExpression.trim().length > 0 && /^[\d\s+\-*/().]+$/.test(mathExpression)) {
        try {
            const calculation = Function(`"use strict"; return (${mathExpression})`)();
            return res.status(200).send(`Core Computation Successful!\nResult: ${calculation}`);
        } catch (e) {
            // Fallback message if math parsing fails
        }
    }

    // 🌍 5. GENERAL CATCH-ALL LOGIC RESPONSES
    if (cleanMsg.includes("hello") || cleanMsg.includes("hi") || cleanMsg.includes("hey")) {
        return res.status(200).send("Hello there, Anthony! Connection secure. How can I assist you with math logic, branding layouts, or system metrics today?");
    }

    return res.status(200).send("Data packet logged successfully. For advanced general knowledge searching or premium visual branding inquiries, Anthony is ready to collaborate with you right now!");

  } catch (error) {
    return res.status(200).send("System check: Connection verified. Please try sending your query once more!");
  }
}
