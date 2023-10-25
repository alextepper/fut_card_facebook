import React, { useState, useEffect } from "react";
import axios from "axios";
import "./testQuestionPage.css";
import ProgressBar from "../progressBar/ProgressBar";

const QuizPage = () => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [userAnswers, setUserAnswers] = useState([]);
  const [quizId, setQuizId] = useState();
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [message, setMessage] = useState("");
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (fadeOut && currentIndex < 4) {
      setTimeout(() => setFadeOut(false), 500);
    } else if (userAnswers.length === 0) {
      setFadeOut(false);
    }
  }, [fadeOut, userAnswers]);

  const handleTransition = async () => {
    setFadeOut(true);

    // Delay before changing the question to let the fade-out finish
    setTimeout(() => {
      handleSubmit();
    }, 500);
  };

  const startQuiz = async () => {
    try {
      const user = localStorage.getItem("user");
      const userId = JSON.parse(user).id;
      const response = await axios.get(
        process.env.REACT_APP_GENERAL_URI + "/api/questions",
        { headers: { "user-id": userId, subject: "math" } }
      );
      setQuizId(response.data.quizTryId);
      setQuestions(response.data.questions);
    } catch (error) {
      console.error("Failed to start quiz", error);
    }
  };

  if (!questions.length) {
    return (
      <div className="startButton">
        <button onClick={startQuiz}>Start Quiz</button>
      </div>
    );
  }

  const handleSubmit = async () => {
    const currentAnswer = {
      questionId: questions[currentIndex]._id,
      answer: selectedOption,
    };

    const updatedAnswers = [...userAnswers, currentAnswer];

    if (currentIndex === questions.length - 1) {
      try {
        const response = await axios.post(
          process.env.REACT_APP_GENERAL_URI + "/api/questions/check",
          {
            answers: updatedAnswers.map((answer) => ({
              questionId: answer.questionId,
              providedAnswer: answer.answer,
            })),
            quizTryId: quizId,
            difficultyLevel: questions[0].difficultyLevel,
          }
        );

        if (response.data.nextLevelQuestions) {
          setQuestions(response.data.nextLevelQuestions);
          setCurrentIndex(0);
          setUserAnswers([]);
        } else {
          setMessage(response.data.message);
          setQuizCompleted(true);
        }
      } catch (error) {
        console.error("Error sending answers to server", error);
      }
    } else {
      // Record the user's answer and move to the next question
      setUserAnswers(updatedAnswers);
      setSelectedOption(null);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  if (quizCompleted) {
    return (
      <div className="finalMessage">
        <h2>{message}</h2>
      </div>
    );
  }

  return (
    <div className="testWrapper">
      <ProgressBar
        currentIndex={currentIndex}
        totalQuestions={questions.length}
        difficultyLevel={questions[currentIndex]?.difficultyLevel}
      />
      <div className={`question-container ${fadeOut ? "fade-out" : ""}`}>
        <h1>{questions[currentIndex]?.questionText}</h1>
        {questions[currentIndex]?.options.map((option, index) => (
          <div
            className="option-container"
            key={index}
            onClick={() => setSelectedOption(option)}
          >
            <input
              type="radio"
              value={option}
              checked={selectedOption === option}
              onChange={() => setSelectedOption(option)}
            />
            {option}
          </div>
        ))}
        <button onClick={handleTransition} disabled={!selectedOption}>
          {currentIndex === questions.length - 1 ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default QuizPage;
