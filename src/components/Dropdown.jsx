import React, { useState } from "react";

function Dropdown({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="max-w-4xl w-full bg-white text-blue-600 rounded-lg shadow-lg p-6 m-10 text-black">
      <button
        onClick={toggleDropdown}
        className="w-full text-left bg-blue-600 text-black font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
      >
        {isOpen ? `Hide ${title}` : `Show ${title}`}
      </button>
      {isOpen && (
        <div className="mt-4">
          <h2 className="text-2xl font-semibold mb-4">{title}</h2>
          {children}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
