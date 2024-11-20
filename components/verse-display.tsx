"use client";

import { useState } from "react";
import {
  getRandomVerse,
  saveVerse,
  type Verse as IVerse,
} from "../utils/verse";
import { Verse } from "./verse";

export function VerseDisplay({ initialVerse }: { initialVerse: IVerse }) {
  const [verse, updateVerse] = useState(initialVerse);
  const [savedVerses, updateSavedVerses] = useState<IVerse[]>([]);
  const nextVerse = async () => updateVerse(await getRandomVerse());
  const saveAsfavorite = async () => {
    // Don't allow duplicates
    if (savedVerses.find((v) => v.reference === verse.reference)) {
      return;
    }
    // Show optimisically user doesn't have to wait
    updateSavedVerses(savedVerses.concat(verse));
    await saveVerse(verse);

    // Update after confirmation by server
    // Refilter the data if the server responded with an error
  };

  return (
    <>
      <div className="featured-verse">
        <h2>Featured Verse</h2>
        <Verse {...verse} />
        <button onClick={nextVerse}>Next Verse</button>
        <button onClick={saveAsfavorite}>Save as Favorite</button>
      </div>

      <div className="saved-verse">
        {savedVerses.length > 0 && <h2>Saved Verses</h2>}
        {savedVerses.map((verse) => {
          return <Verse key={verse.reference} {...verse} />;
        })}
      </div>
    </>
  );
}
