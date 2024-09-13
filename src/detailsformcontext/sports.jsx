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
  const { selected, selectedItems, handleClick, handleCheckboxChange } =
    useFormContext();

  return (
    <div>
      <input
        value={selectedItems}
        placeholder="Select your option"
        onClick={handleClick}
      />
      {selected &&
        data.map((item, index) => (
          <div>
            <input
              type="checkbox"
              key={index}
              onChange={() => handleCheckboxChange(item)}
              checked={selectedItems.includes(item)}
            />
            {item}
          </div>
        ))}
    </div>
  );
}
