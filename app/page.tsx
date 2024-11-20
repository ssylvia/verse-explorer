import { getRandomVerse, getSavedVerses } from "../utils/verse";
import { VerseDisplay } from "@/components/verse-display";

export default async function Home() {
  const initialVerse = await getRandomVerse("http://localhost:3000");

  return (
    <main>
      <header>
        <h1>Verse Explorer</h1>
        <VerseDisplay initialVerse={initialVerse} />
      </header>
    </main>
  );
}
