import { getVerse } from "../utils/getVerse";
import { FeaturedVerse } from "@/components/featured-verse";

export default async function Home() {
  const initialVerse = await getVerse();

  return (
    <main>
      <header>
        <h1>Verse Explorer</h1>
        <FeaturedVerse initialVerse={initialVerse} />
      </header>
    </main>
  );
}
