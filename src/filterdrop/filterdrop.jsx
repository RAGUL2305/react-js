import React, { useState, useEffect } from "react";

const options = ["python", "java", "css", "js"];

export default function Shortout() {
  const [search, setSearch] = useState("");
  const [choose, setChoose] = useState([]);

  useEffect(() => {
    setChoose(options.filter((item) => item.includes(search)));
  }, [search]);

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
          {choose.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      }
    </div>
  );
};