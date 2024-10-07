import React from "react";

const Modal = ({ id, header, body, footer, onClose }) => {
  return (
    <div
      id={id || "Modal"}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md mx-4">
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold">{header || "HEADER"}</h2>
          <button
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={onClose}
          >
            &times;
          </button>
        </div>
        <div className="p-4">
          {body ? (
            body
          ) : (
            <div>
              <p>This is our modal body</p>
            </div>
          )}
        </div>
        <div className="p-4 border-t border-gray-200">
          {footer ? (
            footer
          ) : (
            <h2 className="text-center text-gray-600">Footer</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
