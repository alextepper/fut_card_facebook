import React, { useState, useEffect } from "react";
import QuizTryItem from "./QuizTryItem";
import "./quizTryList.css";

const QuizTryList = ({ userId }) => {
  const [quizTries, setQuizTries] = useState([]);

  useEffect(() => {
    const fetchQuizTries = async () => {
      try {
        const response = await fetch(
          process.env.REACT_APP_GENERAL_URI +
            `/api/questions/quiztries/${userId}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setQuizTries(data);
      } catch (error) {
        console.error("There was an error fetching quiz tries:", error);
      }
    };

    fetchQuizTries();
  }, [userId]);

  return (
    <div className="quiz-tries-list">
      <h3>Your quiz appempts</h3>
      {quizTries.map((tryItem) => (
        <QuizTryItem key={tryItem._id} tryItem={tryItem} />
      ))}
    </div>
  );
};

export default QuizTryList;
