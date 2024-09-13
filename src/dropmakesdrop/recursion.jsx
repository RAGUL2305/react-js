import React, { useState } from "react";
import "./recursion.css"

function MultiDropDownRecrusion({data}){
  const [openItems, setOpenItems] = useState('');
  const items = data.map((item) => item.label);  
  const [selectedItems,setSelectedItems] = useState(items); 
  const[isOpen,setIsOpen] = useState(false);

  const handleOpen = (label) => {
      setOpenItems(openItems === label ? null : label);
      setSelectedItems(openItems === label ? items : label);
  };

  const handleClick = () =>{
     setIsOpen(!isOpen)
  }

return (
  <div className="dropdown">
    <input 
    className="inputbox"
    placeholder="Select an option"
    value = {openItems}
    onClick={handleClick}
    />
   {isOpen && data.map((item) => (
      <div key={item.label} className="item">
        {selectedItems.includes(item.label) && <span onClick={()=>handleOpen(item.label)}>{item.label}</span>}
        {openItems=== item.label && item.children  && (
          <div className="children">
            <MultiDropDownRecrusion data={item.children} />
          </div>
        )}
      </div>
    ))}
  </div>
);
}
export default MultiDropDownRecrusion;

