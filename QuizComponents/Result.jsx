import React from "react";

const Result = ({ userAnswer, question, resetQuiz }) => {
  const correctAnswer = userAnswer.filter((answer) => answer).length;

  return (
    <>
      <div className="result mt-8">
        <h2>Result</h2>
        <p>
          You have answered {correctAnswer} out of {question.length} questions.
          <span
            onClick={resetQuiz}
            className="font-bold ml-5 cursor cursor-pointer"
          >
            Click here to retry
          </span>
        </p>
        <ul></ul>
      </div>
    </>
  );
};

export default Result;
