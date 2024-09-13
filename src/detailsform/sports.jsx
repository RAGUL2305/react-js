import React, { useState } from "react";
import "./details.css";
import _ from "lodash";


let data = ["Boxing","Cricket","Tennis","Baseball","Golf","Badminton","Basketball",]

export default function Sports({selected,setSelected,selectedItems,setSelectedItems}) {
//   const [selected, setSelected] = useState(false);
//   const [selectedItems, setSelectedItems] = useState([]);

  const handleClick = () => {
    setSelected(!selected);
  };

  const handleCheckboxChange = (item) => {
    setSelectedItems((arg) => {
      if (!arg.includes(item)) {
        return [...arg, item];
      } else {
        return arg.filter((option) => option !== item);
      }
    });
  };

  return (
    <div>
      <input
        value={selectedItems}
        //   onChange={handleChange}
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
