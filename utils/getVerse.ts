export interface Verse {
  /** The verse reference */
  reference: string;
  /** The full text of the verse */
  text: string;
}

/** Fetch a random verse through our server proxy */
export async function getVerse(): Promise<Verse> {
  const res = await fetch("http://localhost:3000/api/verse");
  const verse: Verse = await res.json();
  return verse;
}
