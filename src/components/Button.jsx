import React from "react";

function Button({ label, handleClick }) {
  return (
    <input className="btn" type="button" onClick={handleClick} value={label} />
  );
}

export default Button;
