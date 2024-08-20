export async function POST(req) {
  try {
    console.log(req);
    const body = await req.json();

    return new Response(JSON.stringify({ message: "recieved message" }), {
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
