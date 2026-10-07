import "./Emoji.css";

type EMOJI_Keys = "happy" | "sick" | "dead";

const EMOJI_MAP = new Map<EMOJI_Keys, string>([
  ["happy", "😊"],
  ["sick", "🤢"],
  ["dead", "💀"],
]);

export default function Emoji() {
  let status: EMOJI_Keys = "dead";

  function happyClick() {
    console.log("Status: ", status);
    console.log("Happy!");
    status = "happy";
    console.log("Status: ", status);
  }
  return (
    <>
      <div className="emoji">{EMOJI_MAP.get(status) || "🤨"}</div>

      <div className="acoes">
        <button onClick={happyClick}>Happy</button>
      </div>
    </>
  );
}
