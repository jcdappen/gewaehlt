// This needs the 'postgres' package. You can add it via: npm install postgres
// Netlify will automatically install dependencies from your package.json during deployment.
import postgres from 'postgres';
import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

const COUNTER_ID = 'app_usage';

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  // Ensure this function is only called via POST request for security.
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405, // Method Not Allowed
      body: JSON.stringify({ message: 'Only POST requests are allowed.' }),
      headers: { 'Content-Type': 'application/json' },
    };
  }
  
  const { DATABASE_URL } = process.env;

  if (!DATABASE_URL) {
    console.error('Database URL is not set.');
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Server configuration error.' }),
      headers: { 'Content-Type': 'application/json' },
    };
  }

  const sql = postgres(DATABASE_URL, { ssl: 'require' });

  try {
    // Using an "upsert" operation.
    // This will try to insert a new counter if it doesn't exist.
    // If it does exist (ON CONFLICT), it will update the existing one.
    // This is atomic and prevents race conditions.
    await sql`
      INSERT INTO counters (id, count)
      VALUES (${COUNTER_ID}, 1)
      ON CONFLICT (id)
      DO UPDATE SET count = counters.count + 1;
    `;

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Counter incremented successfully.' }),
      headers: { 'Content-Type': 'application/json' },
    };
  } catch (error) {
    console.error('Database error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Failed to increment counter.' }),
       headers: { 'Content-Type': 'application/json' },
    };
  } finally {
    // Ensure the database connection is closed.
    await sql.end();
  }
};

export { handler };
