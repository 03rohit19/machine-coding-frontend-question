import React from "react";
import { useState } from "react";
import Quizquestion from "../constants/QuizQuestions.json";
import Question from "./Question";
import Result from "./Result";

const QuestionApp = () => {
  const [question, setQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState([]);
  console.log("userAnswer", userAnswer);

  const onAnswerClick = (isCorrect) => {
    setQuestion(question + 1);
    setUserAnswer([...userAnswer, isCorrect]);
  };
  const resetQuiz = () => {
    setQuestion(0);
    setUserAnswer([]);
  };
  return (
    <>
      <div className="App font-sans font-bold text-xl flex items-center flex-col mt-14">
        <h1 className="text-5xl mb-12 text-blue-900">World quiz</h1>

        {/* question component  */}
        {question < Quizquestion.length && (
          <Question
            questions={Quizquestion[question]}
            onAnswerClick={onAnswerClick}
          />
        )}

        {/* result component  */}

        {question === Quizquestion.length && (
          <Result
            userAnswer={userAnswer}
            question={Quizquestion}
            resetQuiz={resetQuiz}
          />
        )}
      </div>
    </>
  );
};

export default QuestionApp;
