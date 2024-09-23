import React, { useState } from "react";
import data from "./data";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiselection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleClick = (id) => {
    setSelected(selected === id ? null : id);
  };

  const handleMultiSelection = (currentId) => {
    let cpyMultiple = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(currentId);
    if (findIndexOfCurrentId === -1) {
      cpyMultiple.push(currentId);
    } else cpyMultiple.splice(findIndexOfCurrentId, 1);
    setMultiple(cpyMultiple);
  };

  return (
    <>
      <div className="wrapper flex flex-col justify-center items-center mt-20 mx-auto rounded-lg shadow-md max-w-[700px] ">
        <button
          onClick={() => setEnableMultiSelection(!enableMultiselection)}
          className="p-3 bg-black text-white font-bold text-xl mb-4"
        >
          Open multi button
        </button>
        <h2 className="text-2xl font-semibold text-center mb-5">
          Your Accordion Title
        </h2>
        <div className="accordian">
          {data && data.length > 0 ? (
            data.map((dataItem) => (
              <div
                className="item"
                key={dataItem.id}
                onClick={() => handlePaaginationId(dataItem.id)}
              >
                <button
                  type="button"
                  className={`title flex gap-6 justify-between px-4 py-2 rounded-t-lg ${
                    selected === dataItem.id ? "bg-gray-200" : "bg-white"
                  }`}
                  onClick={
                    enableMultiselection
                      ? () => handleMultiSelection(dataItem.id)
                      : () => handleClick(dataItem.id)
                  }
                >
                  <h3 className="text-lg font-medium">
                    <span className="font-bold">
                      Question {dataItem.number}:
                    </span>{" "}
                    {dataItem.question}
                  </h3>
                  <span
                    className={`transition duration-200 transform ${
                      selected === dataItem.id ? "rotate-45" : ""
                    }`}
                  >
                    <svg
                      className="w-6 h-6 fill-current"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.293l4.293-4.293a1 1 0 011.414 1.414l-6 6a1 1 0 01-1.414-1.414L5.293 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </button>
                {enableMultiselection
                  ? multiple.indexOf(dataItem.id) !== -1 && (
                      <div className="p-4 bg-gray-100 rounded-b-lg">
                        {dataItem.answer}
                      </div>
                    )
                  : selected === dataItem.id && (
                      <div className="p-4 bg-gray-100 rounded-b-lg">
                        {dataItem.answer}
                      </div>
                    )}
              </div>
            ))
          ) : (
            <div className="text-center">No data found</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Accordion;
