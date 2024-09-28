import React from "react";

const Question = ({ questions, onAnswerClick }) => {
  console.log(questions);
  return (
    <>
      <div className="questions bg-slate-50 w-[500px] p-6 border rounded-lg">
        <h1>{questions.question}</h1>
        <ul className="options">
          {questions.answerOptions.map((options) => (
            <li key={options.text}>
              <button
                onClick={() => onAnswerClick(options.isCorrect)}
                className="bg-slate-100 border p-2 m-2 hover:bg-slate-500 hover:text-white"
              >
                {options.text}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Question;
