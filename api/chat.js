export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).text('Method Not Allowed');
  }

  try {
    const { message } = req.body;
    const encodedPrompt = encodeURIComponent(message);
    
    // Server-side fetch completely bypasses all frontend browser CORS blocks!
    const response = await fetch(`https://pollinations.ai{encodedPrompt}?model=openai`);
    
    if (response.ok) {
      const text = await response.text();
      return res.status(200).send(text);
    } else {
      return res.status(500).send("Cloud node connection lag. Try again!");
    }
  } catch (error) {
    return res.status(500).send("Internal server processing error.");
  }
}
