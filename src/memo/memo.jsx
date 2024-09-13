import React, { useState, useMemo} from "react";

const options = ["python", "java", "css", "js"];

export default function Shortout() {
  const [search, setSearch] = useState("");
  
  const filteredOptions = useMemo(() => {
    return options.filter((item) => item.includes(search));
  }, [search, options]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <input
        onChange={handleChange}
        value={search}
        placeholder="Search here"
        className="input"
      />
      {
        <ul>
          {filteredOptions.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      }
    </div>
  );
};