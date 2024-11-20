import { type Verse } from "../utils/getVerse";
export function Verse({ text, reference }: Verse) {
  return (
    <div className="verse">
      <p className="text">{text}</p>
      <p className="reference">{reference}</p>
    </div>
  );
}
