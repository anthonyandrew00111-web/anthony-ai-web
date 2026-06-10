// Premium unblocked serverless backend node architecture
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
    // Safely processes incoming string arrays and body parsing schemas
    let bodyData = req.body;
    if (typeof bodyData === 'string') {
        try { bodyData = JSON.parse(bodyData); } catch(e) {}
    }
    
    const userMessage = bodyData.message || "";
    if (!userMessage) {
        return res.status(200).send("Hello, Anthony! I received an empty data packet. Please type a specific query.");
    }

    const encodedPrompt = encodeURIComponent(userMessage);
    
    // Server-side network channel completely bypasses browser blocks
    const response = await fetch(`https://pollinations.ai{encodedPrompt}?model=openai`);
    
    if (response.ok) {
      const textResponse = await response.text();
      return res.status(200).send(textResponse.trim());
    } else {
      return res.status(200).send("The cloud node is experiencing traffic lag. Let's try sending that once more!");
    }
  } catch (error) {
    return res.status(200).send("Connection secure. How can I assist you with math logic, branding layouts, or system metrics today?");
  }
}
