import React, { useState } from "react";

const Accordion = ({data}) => {
  const [selected, setSelected] = useState(false);

  const handleClick = (index) =>{
    setSelected(selected === index ? false : index);
  };
  return (
    <div>
      {data.map((item, index) => (
        <div className="accordion-item" key={index}>
          <div className="accordion-header" onClick={() => handleClick(index)}>
            <h3>{item.question}</h3>
            <span>{selected === index ? "⌄" : ">"}</span>
          </div>
          {selected === index && <p>{item.answer}</p>}
          <hr />
        </div>
      ))}
    </div>
  );
};
export default Accordion;