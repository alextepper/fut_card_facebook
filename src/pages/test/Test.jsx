import React from "react";
import Topbar from "../../components/topbar/Topbar";
import "./test.css";
import TestQuestionPage from "../../components/testQuestionPage/TestQuestionPage";

export default function Test() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <TestQuestionPage />
      </div>
    </>
  );
}
