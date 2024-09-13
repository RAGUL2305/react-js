import React, { useState, useContext, createContext, useRef } from "react";
import "./details.css";
import _ from "lodash";

const FormContext = createContext();
export const useFormContext = () => useContext(FormContext);

export default function FormProvider({ children }) {
  const [selected, setSelected] = useState(false);
  const [count, setCount] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    phone: "",
    email: "",
    active: "",
    review: "",
  });
  const [values, setValues] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [details, setDetails] = useState(false);
  const inputRef = useRef(null);

  const handleClick = () => {
    setSelected(!selected);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setCount((prevCount) => prevCount + 1);
    if (!values.includes(formData))
      setValues([
        ...values,
        { id: count, ...formData, sports: [...selectedItems.join(",")] },
      ]);
    setFormData({
      name: "",
      gender: "",
      phone: "",
      email: "",
      active: "",
      review: "",
    });
    setSelected(false);
    setSelectedItems([]);
    inputRef.current.focus();
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
  const handleDeleteClick = (item) => {
    setValues((arg) => arg.filter((option) => option !== item));
  };
  const handleDetailsClick = () => {
    setDetails(!details);
  };
  const handleEditChange = (i, e) => {
    setValues((prevValues) =>
      prevValues.map((item, index) =>
        index === i ? { ...item, review: e } : item
      )
    );
  };
  return (
    <FormContext.Provider
      value={{
        selected,
        formData,
        values,
        selectedItems,
        details,
        inputRef,
        handleClick,
        handleChange,
        handleSubmit,
        handleCheckboxChange,
        handleDeleteClick,
        handleDetailsClick,
        handleEditChange,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}
