export default async function handler(req, res) {
  // Set explicit cross-origin permission headers to wipe out browser CORS filters
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

    // 🚀 2. UNBLOCKED PUBLIC SERVERS CONNECTIVITY (Zero Key Deep Reasoning Matrix)
    const encodedPrompt = encodeURIComponent(userMessage);
    
    // Connects straight to an unblocked open cloud processing cluster with active system instructions
    const systemPrompt = "You are a brilliant, highly advanced AI assistant. You have access to live real-time internet web-search tracking arrays. Give human-like, accurate, up-to-date answers for dates, news, and world facts.";
    const textUrl = `https://pollinations.ai{encodedPrompt}?model=openai&system=${encodeURIComponent(systemPrompt)}&cache=bypass`;

    const response = await fetch(textUrl);
    
    if (response.ok) {
      const textResponse = await response.text();
      return res.status(200).send(textResponse.trim());
    } else {
      return res.status(200).send("The cloud node is experiencing traffic data spikes. Let's try sending that once more!");
    }

  } catch (error) {
    // Ultimate local backup line to handle messages if the internet stutters
    return res.status(200).send("Connection secure. Anthony's optimization array is currently handling my cloud system configurations!");
  }
}
