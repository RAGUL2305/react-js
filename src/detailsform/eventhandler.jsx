import React, { useState } from "react";
import FormData from "./formdata.jsx";
import Contents from "./contents.jsx";

export default function Handle() {
  const [selected, setSelected] = useState(false);
  const [values, setValues] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [details, setDetails] = useState(false);
  const inputRef = useRef(null);

  return (
    <div>
      <FormData
        values={values}
        setValues={setValues}
        selected={selected}
        setSelected={setSelected}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
        inputRef = {inputRef}
      />

      <Contents
        values={values}
        setValues={setValues}
        details={details}
        setDetails={setDetails}
      />
      
    </div>
  );
}
