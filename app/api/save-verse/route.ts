export async function PUT(request: Request) {
  // Typically would validate data here but keeping it simple
  const { verse } = await request.json();

  // Store verse to database
  // For code sample, we will just log the verse
  console.log("Saving verse: ", verse.reference);

  return Response.json({
    success: true,
  });
}
