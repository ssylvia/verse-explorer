export interface Verse {
  /** The verse reference */
  reference: string;
  /** The full text of the verse */
  text: string;
}

/** Fetch a random verse through our server proxy */
export async function getRandomVerse(origin: string = ""): Promise<Verse> {
  const res = await fetch(`${origin}/api/verse`);
  const verse: Verse = await res.json();
  return verse;
}

/** Save a verse as a favorite */
export async function saveVerse(
  verse: Verse,
  origin: string = ""
): Promise<boolean> {
  const res = await fetch("/api/save-verse", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ verse }),
  });
  return await res.json();
}
