import { Answer } from '../types';

export const getPersonalizedMessage = async (name: string, answers: Answer[]): Promise<string> => {
  try {
    const response = await fetch('/.netlify/functions/getPersonalizedMessage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, answers }),
    });

    if (!response.ok) {
        // Try to read the error message from the serverless function
        const errorData = await response.json().catch(() => ({})); // catch if body is not json
        console.error("Error from serverless function:", response.status, errorData);
        throw new Error(`Server error: ${response.statusText}`);
    }

    const data = await response.json();
    return data.message;
  } catch (error) {
    console.error("Error calling serverless function:", error);
    // Return the same fallback message for any kind of error (network, server, etc.)
    return "Weil du einzigartig und wertvoll bist. Gott hat einen besonderen Plan für dich, der größer ist als alle Entscheidungen, die du treffen kannst. Er liebt dich bedingungslos.";
  }
};
