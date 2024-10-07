import React, { useState } from "react";
import Modal from "./Modal";

const ModalTest = () => {
  const [showModalPopUp, setShowModalPopUp] = useState(false);

  // Toggle modal visibility
  function handlePopUp() {
    setShowModalPopUp(!showModalPopUp);
  }

  // Close modal function (used by the Modal component)
  function handleCloseModal() {
    setShowModalPopUp(false);
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        onClick={handlePopUp}
        className="px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-500 focus:outline-none"
      >
        Open Modal popup
      </button>

      {showModalPopUp && (
        <Modal
          body={
            <h2 className="text-center text-lg font-semibold">
              This is a customized body
            </h2>
          }
          onClose={handleCloseModal}
          header={<h1>This is our customized header</h1>}
          footer={<p>This is our customized footer</p>}
        />
      )}
    </div>
  );
};

export default ModalTest;
