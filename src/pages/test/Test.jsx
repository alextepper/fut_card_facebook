import React from "react";
import Topbar from "../../components/topbar/Topbar";
import "./test.css";
import TestQuestionPage from "../../components/testQuestionPage/TestQuestionPage";

export default function Test() {
  return (
    <div className="homeBody">
      <Topbar />
      <div className="homeContainer">
        <TestQuestionPage />
      </div>
    </div>
  );
}
