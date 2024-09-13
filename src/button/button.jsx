import React from "react";
import "./button.css";

function MyButton(props) {
  const { type = "medium", disabled = false } = props;
  const isDisabled = disabled ? "disabled" : "";

  return (
    <div>
      <button className={`${type} ${isDisabled}`}> Click </button>
    </div>
  );
}
export default MyButton;
