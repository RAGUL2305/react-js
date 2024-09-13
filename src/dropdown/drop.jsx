import React, { useState } from "react";
// import './drop.css';

const values = ["Python", "Css", "Java", "Js"];

export default function DropDown() {
  const [drop, setDrop] = useState("");
  const handleClick = (e) => {
    setDrop(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={drop}
      />
      <select onClick={handleClick}>
        {values.map((item, i) => (
          <option>{item}</option>
        ))}
        ;
      </select>
    </div>
  );
}


