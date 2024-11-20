export async function GET() {
  const res = await fetch("https://bible-api.com/?random=verse");
  const { reference, text } = await res.json();
  return Response.json({ reference, text });
}
