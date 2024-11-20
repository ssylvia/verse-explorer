"use client";

import { useState } from "react";
import { getVerse, type Verse as IVerse } from "../utils/getVerse";
import { Verse } from "./verse";

export function FeaturedVerse({ initialVerse }: { initialVerse: IVerse }) {
  const [verse, updateVerse] = useState(initialVerse);
  const nextVerse = async () => updateVerse(await getVerse());
  return (
    <div className="featured-verse">
      <Verse {...verse} />
      <button onClick={nextVerse}>Next Verse</button>
    </div>
  );
}
