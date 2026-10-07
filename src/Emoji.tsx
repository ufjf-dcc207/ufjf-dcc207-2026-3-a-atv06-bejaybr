import './Emoji.css';

type EMOJI_Keys = "happy" | "sick" | "dead";

const EMOJI_MAP = new Map<EMOJI_Keys, string>([
  ["happy", "😊"],
  ["sick", "🤢"],
  ["dead", "💀"]
]);

export default function Emoji() {
  return <div className="emoji">
    {EMOJI_MAP.get("sic")|| "🤨"}

  </div>;
}
