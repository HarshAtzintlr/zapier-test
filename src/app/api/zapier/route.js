import axios from "axios";

// GET request handler
export async function GET() {
  try {
    const api_key = "YOUR_API_KEY";
    return new Response(JSON.stringify({ api_key }), { status: 200 });
  } catch (error) {
    console.error("GET Error:", error.message);
    return new Response(
      JSON.stringify({ message: "Server Error", error: error.message }),
      { status: 500 }
    );
  }
}

// Return 405 for any other HTTP methods
export async function handleMethods() {
  return new Response(JSON.stringify({ message: "Method Not Allowed" }), {
    status: 405,
  });
}
