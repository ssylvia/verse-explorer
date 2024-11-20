import { Verse } from "@/components/verse";
import { getVerse } from "../utils/getVerse";

export default async function Home() {
  const verse = await getVerse();
  console.log(verse);
  return (
    <main>
      <header>
        <h1>Verse Explorer</h1>
        <div className="featured-verse">
          <Verse {...verse} />
        </div>
      </header>
    </main>
  );
}
