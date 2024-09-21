import React from "react";
import "./button.css";
function Button({ text, onClick }) {
  return (
    <div className="btnDiv">
      <button onClick={onClick} className="btn">
    Ad to Card
      </button>
    </div>
  );
}

export default Button;
