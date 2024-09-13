import React, { useState } from "react";

export default function MultiSelectDropdown(props) {
  let { values } = props;
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [availableOptions, setAvailableOptions] = useState(values);

  const handleChange = (event) => {
    const selectedValue = event.target.value
    if (!selectedOptions.includes(selectedValue))
      setSelectedOptions([...selectedOptions, selectedValue]);
  };

  const handleRemoveClick = (select) => {
    setSelectedOptions(selectedOptions.filter((option) => option !== select));
    setAvailableOptions(availableOptions.filter((option) => option !== select));
  };

  return ( 
    <div>
      <input value={selectedOptions} className="inputbox" />
      <select onChange={handleChange}>
        {availableOptions.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
      <div>
        <h3>SelectedItems:</h3>
        <ul>
          {selectedOptions.map((item) => (
            <li key={item}>
              {item}
              <button onClick={() => handleRemoveClick(item)}>x</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
