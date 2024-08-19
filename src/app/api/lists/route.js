export async function GET() {
  try {
    const list_data = {
      list_name: "Created AT",
      list_data: {
        first_name: "Harsh",
        last_name: "Dubey",
      },
    };
    return new Response(JSON.stringify(list_data), { status: 200 });
  } catch (error) {
    console.error("GET Error:", error.message);
    return new Response(
      JSON.stringify({ message: "Server Error", error: error.message }),
      { status: 500 }
    );
  }
}

export async function POST() {
  return handleMethods();
}

export async function PUT() {
  return handleMethods();
}

export async function DELETE() {
  return handleMethods();
}

export async function handleMethods() {
  return new Response(JSON.stringify({ message: "Method Not Allowed" }), {
    status: 405,
  });
}
