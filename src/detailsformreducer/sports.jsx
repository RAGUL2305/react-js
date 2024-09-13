import React from "react";
import { useFormContext } from "./provider";
import "./details.css";
import _ from "lodash";

let data = [
  "Boxing",
  "Cricket",
  "Tennis",
  "Baseball",
  "Golf",
  "Badminton",
  "Basketball",
];

export default function Sports() {
  const { state, handleClick, handleCheckboxChange } =
    useFormContext();

  return (
    <div>
      <input
        value={state.selectedItems}
        placeholder="Select your option"
        onClick={handleClick}
      />
      {state.selected &&
        data.map((item, index) => (
          <div>
            <input
              type="checkbox"
              key={index}
              onChange={() => handleCheckboxChange(item)}
              checked={state.selectedItems.includes(item)}
            />
            {item}
          </div>
        ))}
    </div>
  );
}
