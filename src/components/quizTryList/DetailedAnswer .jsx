import React from "react";
import "./quizTryList.css";

const DetailedAnswer = ({ answer }) => {
  console.log(answer);
  return (
    <div className="detailed-answer">
      <p className="question-text">{answer.questionText}</p>
      <p className="difficulty-level">Difficulty: {answer.difficultyLevel}</p>
      <p
        className={`provided-answer ${
          answer.correct ? "correct" : "incorrect"
        }`}
      >
        Your Answer: {answer.providedAnswer}
      </p>
    </div>
  );
};

export default DetailedAnswer;
