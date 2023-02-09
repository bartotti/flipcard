import React, { useState } from "react";
import InputField from "./components/InputField";
import FlashcardList from "./components/FlashcardList";

const DummyVar = [
  {
    id: 1,
    questions: "what is 2+2",
    answer: "4",
    section: ["math"],
  },
  {
    id: 2,
    questions: "what is 4+4",
    answer: "8",
    section: ["math"],
  },
];

function App() {
  const [flashcards, setFlashcards] = useState(DummyVar);

  const addFlashcard = newFlashcard => {
    setFlashcards(prevFlashcards => [
      ...prevFlashcards,
      {
        id: prevFlashcards.length + 1,
        questions: newFlashcard.questions,
        answer: newFlashcard.answer,
        section: newFlashcard.category,
      },
    ]);
  };

  return (
    <div>
      <InputField addFlashcard={addFlashcard} />
      <FlashcardList flashcards={flashcards} />
    </div>
  );
}

export default App;
