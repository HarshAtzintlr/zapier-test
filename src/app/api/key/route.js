export async function GET(req) {
  try {
    console.log(req);
    return new Response(JSON.stringify({ message: "Success" }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}

export async function handleMethods() {
  return new Response(JSON.stringify({ message: "Method Not Allowed" }), {
    status: 405,
  });
}
