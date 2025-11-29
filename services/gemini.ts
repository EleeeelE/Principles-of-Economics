import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const modelName = 'gemini-2.5-flash';

export const generateLessonContent = async (topicQuery: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: modelName,
      contents: `You are an expert Economics Professor specializing in N. Gregory Mankiw's "Principles of Economics". 
      
      Create a comprehensive, easy-to-understand lesson for the following topic: "${topicQuery}".
      
      Formatting Rules:
      - Use clear headings.
      - Use bullet points for key concepts.
      - Provide real-world examples to illustrate the concept.
      - Keep the tone academic yet accessible, like a well-written textbook.
      - Do NOT use Markdown code blocks for the whole text, just standard markdown formatting (bold, italic, headers).
      `,
    });
    return response.text || "Content generation failed. Please try again.";
  } catch (error) {
    console.error("Error generating lesson:", error);
    return "Failed to load lesson content. Please check your API configuration.";
  }
};

export const chatWithTutor = async (history: { role: 'user' | 'model', text: string }[], message: string): Promise<string> => {
  try {
    // Convert history to format expected by API if needed, but for simple generateContent we can just append context
    // Ideally use chat.sendMessage, let's do a single turn for simplicity or reconstruct chat
    // For a robust SPA without backend persistence, we'll re-send context or use chat session if kept in state
    // Here we will use the chat helper for better state management in the component
    
    // Actually, let's use a fresh chat instance or a stateless approach for this simple implementation
    // Ideally, we pass the history to the chat creation.
    
    const chat = ai.chats.create({
      model: modelName,
      config: {
        systemInstruction: "You are a friendly and wise economics tutor (Socratic method). Help the student understand the principles of economics. Keep answers concise. **Bold** key economic terms and definitions to make them easy to scan."
      },
      history: history.map(h => ({ role: h.role, parts: [{ text: h.text }] }))
    });

    const response = await chat.sendMessage({ message });
    return response.text || "I couldn't understand that.";
  } catch (error) {
    console.error("Chat error:", error);
    return "I'm having trouble connecting to the economics library right now.";
  }
};