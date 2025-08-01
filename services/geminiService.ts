import { Answers } from '../types';

export const generatePersonalizedReason = async (name: string, answers: Answers): Promise<string> => {
  try {
    const response = await fetch('/.netlify/functions/gemini', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, answers }),
    });

    if (!response.ok) {
        throw new Error(`Funktionsaufruf fehlgeschlagen mit Status: ${response.status}`);
    }

    const data = await response.json();
    return data.reason;

  } catch (error) {
    console.error("Fehler beim Aufruf der Netlify-Funktion:", error);
    // Gibt eine Fallback-Nachricht zurück
    return `Weil du ein einzigartiges und geliebtes Geschöpf bist. Gott sieht dein Herz, deine Stärken und deine Träume. Er hat einen wunderbaren Plan für dein Leben und möchte eine persönliche Beziehung mit dir.`;
  }
};
