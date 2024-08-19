export async function POST(req) {
  try {
    const body = await req.json(); // Parse the request body to JSON
    const message = body.message; // Extract the "message" property

    return new Response(JSON.stringify({ receivedMessage: message }), {
      status: 200,
    });
  } catch (error) {
    console.error("POST Error:", error.message);
    return new Response(
      JSON.stringify({ message: "Server Error", error: error.message }),
      { status: 500 }
    );
  }
}
