import { GoogleGenAI } from "@google/genai";

let ai: GoogleGenAI | null = null;

const getAIClient = () => {
  if (!ai) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.warn("GEMINI_API_KEY is not defined. Chatbot will not function.");
    }
    // Initialize even if undefined to prevent immediate crash, 
    // or handle it inside the chat function
    ai = new GoogleGenAI({ apiKey: apiKey || 'dummy-key' });
  }
  return ai;
};

const SYSTEM_INSTRUCTION = `
You are a helpful and professional assistant for Cape Turf, an artificial grass supplier and installer based in Cape Town, South Africa.
Your goal is to answer customer questions about artificial grass, installation services, and quotes.

Key Information about Cape Turf:
- Location: 7 Honeyside West, Crawford, Frere Estate, Cape Town.
- Services: Supply and professional installation of artificial grass.
- Products: Various pile heights (13mm to 40mm) including Cape Fern, Cape Spring, Cape Autumn, Cape Summer, and Cape Diamond.
- Pricing: Wholesale rates available.
- Contact: Phone 062 454 9298, Email capeturf24@gmail.com.
- Benefits: Low maintenance, evergreen, durable, pet-friendly, saves water.

Guidelines:
- Be polite, professional, and concise.
- If asked about a quote, encourage them to use the "Request a Quote" form on the website or contact the team directly.
- If you don't know the answer, suggest they contact the team via phone or email.
- Mention that Cape Turf serves the Western Cape area.
`;

export async function getChatResponse(userMessage: string, history: { role: 'user' | 'model', text: string }[]) {
  try {
    if (!process.env.GEMINI_API_KEY) {
      return "I'm currently offline because my API key is not configured. Please contact us directly at 062 454 9298.";
    }

    const client = getAIClient();
    const chat = client.chats.create({
      model: "gemini-3-flash-preview",
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      })),
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    const response = await chat.sendMessage({ message: userMessage });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm having trouble connecting right now. Please try again later or contact us directly at 062 454 9298.";
  }
}
