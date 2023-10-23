import React from "react";
import "./progressBar.css";

const ProgressBar = ({ currentIndex, totalQuestions, difficultyLevel }) => {
  const difficultyColors = {
    1: "#00CC99", // Color for difficulty level 1
    2: "#FFCC00", // Color for difficulty level 2
    3: "#FF6633", // Color for difficulty level 3
    //... add colors for additional levels if needed
  };

  const progressPercentage = ((currentIndex + 1) / totalQuestions) * 100;
  const progressBarColor = difficultyColors[difficultyLevel];

  return (
    <div className="progress-bar">
      <div
        className="progress-bar-filled"
        style={{
          width: `${progressPercentage}%`,
          backgroundColor: progressBarColor,
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
