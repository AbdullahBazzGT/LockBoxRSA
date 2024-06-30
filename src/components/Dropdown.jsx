import React, { Fragment, useState } from "react";

function Dropdown({ children }) {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <>
      <div className="pl-6 pt-6 pb-3">
        <button
          className="border-1 rounded-lg border-gray-400 px-10 py-2 text-2xl hover:opacity-60"
          onClick={handleClick}
        >
          {open ? "Hide Example" : "Show Example"}
        </button>
        {open && <div className="mt-3">{children}</div>}
      </div>
    </>
  );
}

export default Dropdown;
