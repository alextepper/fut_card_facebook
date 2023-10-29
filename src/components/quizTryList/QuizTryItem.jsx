import React, { useState, useEffect, useRef } from "react";
import "./quizTryList.css";
import DetailedAnswer from "./DetailedAnswer ";

const QuizTryItem = ({ tryItem }) => {
  const [showAnswers, setShowAnswers] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [answersDetails, setAnswersDetails] = useState([]);
  const answersRef = useRef(null);

  const fetchAnswers = async () => {
    setIsLoading(true);
    try {
      let response = await fetch(
        process.env.REACT_APP_GENERAL_URI +
          `/api/questions/quiztry/questions/${tryItem._id}`
      );
      let data = await response.json();
      setAnswersDetails(data);
    } catch (error) {
      console.error("Failed to fetch answers:", error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (showAnswers) {
      fetchAnswers();
    }
  }, [showAnswers]);

  useEffect(() => {
    if (answersRef.current && showAnswers) {
      answersRef.current.style.maxHeight = `${answersRef.current.scrollHeight}px`;
    }
  }, [answersDetails]);

  const toggleAnswers = () => {
    if (showAnswers) {
      answersRef.current.style.maxHeight = "0px";
      setTimeout(() => {
        setShowAnswers(!showAnswers);
      }, 500); // match with transition duration
    } else {
      setShowAnswers(true);
    }
  };

  console.log(answersDetails);

  return (
    <div className="try-item" onClick={toggleAnswers}>
      <div className="try-item-header">
        <div className="try-item-content">
          <div className="subjectTitle">{tryItem.subject}</div>
          <div className="markDiv">{tryItem.calculatedScore}</div>
        </div>
      </div>
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${tryItem.calculatedScore}%` }}
        ></div>
      </div>

      <div
        ref={answersRef}
        className={`answers-container ${showAnswers ? "active" : ""}`}
      >
        {isLoading ? (
          <div className="loading-icon"></div>
        ) : (
          answersDetails.map((answerDetail) => (
            <DetailedAnswer key={answerDetail._id} answer={answerDetail} />
          ))
        )}
      </div>
    </div>
  );
};

export default QuizTryItem;
