import React, { useState } from "react";

export default function Flashcard({ flashcard }) {
  const [flip, setFlip] = useState(false);

  return (
    <div
      style={{ margin: "20px", textAlign: "center" }}
      onClick={() => setFlip(!flip)}
    >
      <div
        style={{
          padding: "20px",
          backgroundColor: "#f2f2f2",
          borderRadius: "10px",
        }}
      >
        {flip ? flashcard.answer : flashcard.questions}
      </div>
    </div>
  );
}
