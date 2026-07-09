import { useState } from "react";

function AIChat() {

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  function askAI() {

    if (question.toLowerCase().includes("crowd")) {
      setAnswer("Expected crowd today: 15,000 spectators. Peak entry time: 6 PM.");
    } 
    else if (question.toLowerCase().includes("parking")) {
      setAnswer("Parking availability is 70%. Extra parking zone is ready.");
    } 
    else if (question.toLowerCase().includes("security")) {
      setAnswer("Security status is normal. No alerts detected.");
    } 
    else {
      setAnswer("AI analysis: Stadium operations are running smoothly.");
    }

  }


  return (
    <div
      style={{
        marginTop: "40px",
        padding: "25px",
        background: "#eee",
        borderRadius: "12px"
      }}
    >

      <h2>🤖 StadiumSense AI Assistant</h2>

      <input
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask about stadium..."
      />

      <button onClick={askAI}>
        Ask
      </button>

      <p>{answer}</p>

    </div>
  );
}


export default AIChat;