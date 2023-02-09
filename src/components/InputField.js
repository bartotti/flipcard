import React, { useState } from "react";

const InputField = ({ addFlashcard }) => {
  const [questions, setQuestions] = useState("");
  const [answer, setAnswer] = useState("");
  const [category, setCategory] = useState("");

  const handleOptionChange = event => {
    setCategory(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    addFlashcard({ questions, answer, category });
    setQuestions("");
    setAnswer("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter question"
        value={questions}
        onChange={e => setQuestions(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter answer"
        value={answer}
        onChange={e => setAnswer(e.target.value)}
      />
      <button type="submit">Add flashcard</button>
      <p>Math</p>
      <input
        type="radio"
        value="math"
        checked={category === "math"}
        onChange={handleOptionChange}
      />
      <p>Science</p>
      <input
        type="radio"
        value="sci"
        checked={category === "sci"}
        onChange={handleOptionChange}
      />
      <p>History</p>
      <input
        type="radio"
        value="his"
        checked={category === "his"}
        onChange={handleOptionChange}
      />
    </form>
  );
};

export default InputField;
