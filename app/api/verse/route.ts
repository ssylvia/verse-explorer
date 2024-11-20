export async function GET() {
  const res = await fetch("https://bible-api.com/?random=verse", {
    cache: "no-cache",
  });
  const { reference, text } = await res.json();
  return Response.json({ reference, text });
}
