import React, { useState } from 'react';

function CheckboxComponent() {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setSelectedItems((prevItems) => [...prevItems, value]);
    } else {
      setSelectedItems((prevItems) =>
        prevItems.filter((item) => item !== value)
      );
    }
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          value="Item1"
          onChange={handleCheckboxChange}
        />
        Item 1
      </label>
      <label>
        <input
          type="checkbox"
          value="Item2"
          onChange={handleCheckboxChange}
        />
        Item 2
      </label>
      <label>
        <input
          type="checkbox"
          value="Item3"
          onChange={handleCheckboxChange}
        />
        Item 3
      </label>

      <div>
        <h3>Selected Items:</h3>
        <ul>
          {selectedItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CheckboxComponent;
