import React, { useState } from "react";
import Select from "react-select";

export default function MultiChoiceDropdown() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  
  const options = [
    { value: "python", label:"Python" },
    { value: "java", label: "Java" },
    { value: "css", label: "Css" },
  ];

  const handleChange = (selected) => {
    setSelectedOptions(selected);
  };

  return (
    <div>
      <Select
        isMulti = {true}
        value={selectedOptions}
        onChange={handleChange}
        options={options}
      />
    </div>
  );
};
