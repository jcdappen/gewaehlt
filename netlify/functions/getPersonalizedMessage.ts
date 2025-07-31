import { GoogleGenAI } from "@google/genai";
import type { Handler } from "@netlify/functions";
import { QUESTIONS } from "../../constants";
import type { Answer } from "../../types";

const { API_KEY } = process.env;

// This helper function is duplicated from the original service to keep the function self-contained.
function getAnswerText(questionId: string, answerId: string): string {
    const question = QUESTIONS.find(q => q.id === questionId);
    if (!question) return 'Unbekannte Antwort';
    const option = question.options.find(o => o.id === answerId);
    return option ? option.text : 'Unbekannte Antwort';
}

const handler: Handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    if (!API_KEY) {
        console.error("API_KEY environment variable not set in Netlify.");
        return { 
            statusCode: 500, 
            body: JSON.stringify({ message: "Server configuration error." }) 
        };
    }
    
    const fallbackMessage = "Weil du einzigartig und wertvoll bist. Gott hat einen besonderen Plan für dich, der größer ist als alle Entscheidungen, die du treffen kannst. Er liebt dich bedingungslos.";

    try {
        const { name, answers } = JSON.parse(event.body || '{}') as { name: string; answers: Answer[] };

        if (!name || !Array.isArray(answers)) {
            return { statusCode: 400, body: JSON.stringify({ message: "Missing name or answers in request." }) };
        }

        const ai = new GoogleGenAI({ apiKey: API_KEY });

        const formattedAnswers = answers.map(answer => {
            const questionText = QUESTIONS.find(q => q.id === answer.questionId)?.question || 'Unbekannte Frage';
            const answerText = getAnswerText(answer.questionId, answer.answerId);
            return `- ${questionText.replace('Welcher', 'Auswahl').replace('Welche', 'Auswahl').replace('Was', 'Auswahl')}: ${answerText}`;
        }).join('\n');
        
        const prompt = `
          Du bist ein warmherziger und ermutigender spiritueller Ratgeber. Deine Aufgabe ist es, eine personalisierte Botschaft für einen Nutzer namens ${name} zu erstellen. Der Nutzer hat eine Reihe von spielerischen Fragen beantwortet. Die Kernaussage ist immer: "Gott hat DICH gewählt!". Du sollst eine liebevolle Erklärung formulieren, warum Gott ihn/sie basierend auf seinen/ihren Antworten gewählt hat. Kombiniere die Eigenschaften, die sich aus den Antworten ableiten lassen, zu einer einzigartigen und positiven Botschaft. Sei kreativ und inspirierend.
    
          Hier sind die Antworten von ${name}:
          ${formattedAnswers}
    
          Beispiele für die Tonalität:
          - Wenn sportlich/kämpferisch orientiert: "Weil du ein Kämpferherz hast und Gott Kämpfer für sein Reich braucht. Deine Entschlossenheit und dein Siegeswille sind Geschenke, die er in dir sieht."
          - Wenn kreativ/künstlerisch: "Weil du die Welt mit anderen Augen siehst. Gott hat dir ein kreatives Herz gegeben, um seine Schönheit in die Welt zu bringen und andere zu inspirieren."
          - Wenn hilfsbereit/heilend: "Weil du ein Herz für andere hast. Gott sieht dein Mitgefühl und deine Bereitschaft zu helfen - genau solche Menschen braucht diese Welt."
          - Wenn abenteuerlustig/mutig: "Weil du mutig bist und Neues wagst. Gott hat große Pläne mit dir und braucht Menschen, die bereit sind, Glaubensschritte zu gehen."
          - Wenn gemeinschaftsorientiert: "Weil Liebe und Gemeinschaft in deinem Herzen wohnen. Gott sieht, wie wichtig dir Beziehungen sind - und er möchte eine Beziehung mit dir."
    
          Formuliere eine kurze, prägnante und kraftvolle Nachricht (ca. 2-4 Sätze), die direkt an ${name} gerichtet ist. Die Nachricht selbst soll die Erklärung sein. Beginne NICHT mit "${name}, Gott hat dich gewählt", da dies bereits auf dem Bildschirm steht. Beginne direkt mit der Erklärung, z.B. "Weil...". Die Erklärung muss auf Deutsch sein.
        `;

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
        });

        return {
            statusCode: 200,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: response.text }),
        };

    } catch (error) {
        console.error("Error in serverless function:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: fallbackMessage }),
        };
    }
};

export { handler };
