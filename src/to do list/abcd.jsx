import React, { useState } from "react";
import "./todo1.css";

export default function ToDO() {
  const [newTask, setNewTask] = useState([]);
  const [value, setValue] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [editing, setEditing] = useState(null);
  const [currentValue, setCurrentValue] = useState("");

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = () => { 
    if (value) {
      setNewTask([...newTask, value]);
      setValue("");
    }
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

  const handleRemoveClick = (item) => {
    setNewTask((arg) => arg.filter((option) => option !== item));
    setSelectedItems((arg) => arg.filter((option) => option !== item));
  };

  const handleRemoveCheckedCick = () => {
    setNewTask((arg) =>
      arg.filter((option) => !selectedItems.includes(option))
    );
    setSelectedItems([]);
  };

  const handleEditClick = (index) => {
    setEditing(index);
    setCurrentValue(newTask[index]);
  };

  const handleSaveClick = (index) => {
    const updatedNewTask = [...newTask];
    updatedNewTask[index] = currentValue;
    setNewTask(updatedNewTask);
    setEditing(null);
  };

  return (
    <div>
      <div className="initialbackground">
        <h1>TODOLIST</h1>
        <form onSubmit={handleClick}>
          <input
            type="text"
            value={value}
            className="input"
            placeholder="What needs to be done?"
            onChange={handleInputChange}
          />
          <button type="submit" className="addbutton">
            +
          </button>
        </form>
        <ul>
          {newTask.map((item, index) => (
            <li key={index} className="checked">
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange(item)}
                checked={selectedItems.includes(item)}
              />
              {editing === index ? (
                <input
                  type="text"
                  value={currentValue}
                  onChange={(e) => setCurrentValue(e.target.value)}
                />
              ) : (
                <span>{item}</span>
              )}
              {editing === index ? (
                <button onClick={(e) => handleSaveClick(index, e)}>Save</button>
              ) : (
                <button onClick={() => handleEditClick(index)}>✎</button>
              )}
              <button onClick={() => handleRemoveClick(item)}>X</button>
            </li>
          ))}
        </ul>
        <span className="tbl">
          {selectedItems.length} of {newTask.length} tasks done
          <button className="removebutton" onClick={handleRemoveCheckedCick}>
            Remove checked x
          </button>
        </span>
      </div>
    </div>
  );
}
