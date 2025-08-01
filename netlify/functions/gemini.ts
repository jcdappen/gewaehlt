import { GoogleGenAI } from "@google/genai";
import type { Handler } from "@netlify/functions";

// Schnittstelle für den erwarteten Anfragekörper
interface RequestBody {
  name: string;
  answers: Record<string, string>;
}

// Initialisiert den Gemini-Client mit dem API-Schlüssel aus den Umgebungsvariablen
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

const handler: Handler = async (event) => {
  // Nur POST-Anfragen erlauben
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  // Überprüfen, ob der API-Schlüssel in der Serverumgebung gesetzt ist
  if (!process.env.API_KEY) {
    console.error("API_KEY environment variable not set in Netlify function.");
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Serverkonfigurationsfehler.' }),
    };
  }
  
  try {
    const { name, answers } = JSON.parse(event.body || '{}') as RequestBody;

    if (!name || !answers || Object.keys(answers).length === 0) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Ungültige Anfrage: Name oder Antworten fehlen.' }),
      };
    }

    // Erstellt den Text aus den Antworten des Benutzers
    const choicesText = Object.entries(answers)
      .map(([category, choice]) => `- ${category}: ${choice}`)
      .join('\n');

    // Erstellt den Prompt für die Gemini-API
    const prompt = `
Du bist ein weiser, liebevoller spiritueller Mentor. Deine Aufgabe ist es, basierend auf den weltlichen Entscheidungen einer Person eine tiefgründige, ermutigende und persönliche Erklärung zu verfassen, warum Gott sie erwählt hat. Sprich die Person direkt mit ihrem Vornamen an. Halte den Ton warm, kraftvoll und inspirierend. Der Text sollte nicht länger als 3-4 Sätze sein. Gib NUR den Erklärungstext zurück, ohne zusätzliche Begrüßungen oder Formatierungen.

Name der Person: ${name}
Ihre Entscheidungen:
${choicesText}

Basierend auf diesen Entscheidungen, erstelle die persönliche Erklärung für ${name}.
`;

    // Ruft die Gemini-API auf
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    // Sendet die generierte Antwort an das Frontend zurück
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ reason: response.text.trim() }),
    };
  } catch (error) {
    console.error("Fehler in der Netlify-Funktion beim Aufruf der Gemini-API:", error);
    
    // Gibt eine Fallback-Nachricht an den Client zurück, um den App-Flow nicht zu unterbrechen
    const fallbackReason = `Weil du ein einzigartiges und geliebtes Geschöpf bist. Gott sieht dein Herz, deine Stärken und deine Träume. Er hat einen wunderbaren Plan für dein Leben und möchte eine persönliche Beziehung mit dir.`;
    return {
      statusCode: 200, 
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ reason: fallbackReason }),
    };
  }
};

export { handler };
