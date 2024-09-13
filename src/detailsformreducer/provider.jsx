import React, { useContext, createContext, useRef, useReducer } from "react";
import "./details.css";
import _ from "lodash";
import produce from "immer";

const initialState = {
  selected: false,
  count: 1,
  formData: {
    name: "",
    gender: "",
    phone: "",
    email: "",
    active: "",
    review: "",
  },
  values: [],
  selectedItems: [],
  details: false,
};

const reducer = produce((state, action) => {
  switch (action.type) {
    case "HANDLE_CLICK":
      state.selected = !state.selected;
      break;

    case "HANDLE_CHANGE":
      state.formData = {
        ...state.formData,
        [action.payload.name]: action.payload.value,
      };
      break;

    case "HANDLE_SUBMIT":
      const newValues = [...state.values];
      if (!newValues.includes(state.formData)) {
        newValues.push({
          id: state.count,
          ...state.formData,
          sports: [...state.selectedItems.join(",")],
        });
      }
      state.count = state.count + 1;
      state.values = newValues;
      state.formData = {
        name: "",
        gender: "",
        phone: "",
        email: "",
        active: "",
        review: "",
      };
      state.selected = false;
      state.selectedItems = [];
      break;

    case "HANDLE_CHECKBOX_CHANGE":
      const updatedSelectedItems = state.selectedItems.includes(
        action.payload.item
      )
        ? state.selectedItems.filter((option) => option !== action.payload.item)
        : [...state.selectedItems, action.payload.item];
      state.selectedItems = updatedSelectedItems;
      break;

    case "HANDLE_DELETE":
      state.values = state.values.filter(
        (option) => option.id !== action.payload
      );
      break;

    case "HANDLE_DETAILS":
      state.details = !state.details;
      break;

    case "HANDLE_EDIT_CHANGE":
      const updatedValues = state.values.map((item, index) =>
        index === action.payload.index
          ? { ...item, review: action.payload.value }
          : item
      );
      state.values = updatedValues;
      break;
    default:
      return state;
  }
});

const FormContext = createContext();

export const useFormContext = () => useContext(FormContext);

export default function FormProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const inputRef = useRef(null);

  const handleClick = () => {
    dispatch({ type: "HANDLE_CLICK" });
  };

  const handleChange = (e) => {
    dispatch({
      type: "HANDLE_CHANGE",
      payload: { name: e.target.name, value: e.target.value },
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "HANDLE_SUBMIT" });
    inputRef.current.focus();
  };
  const handleCheckboxChange = (item) => {
    dispatch({ type: "HANDLE_CHECKBOX_CHANGE", payload: { item } });
  };
  const handleDeleteClick = (item) => {
    dispatch({ type: "HANDLE_DELETE", payload:  item  });
  };
  const handleDetailsClick = () => {
    dispatch({ type: "HANDLE_DETAILS" });
  };
  const handleEditChange = (i, e) => {
    dispatch({
      type: "HANDLE_EDIT_CHANGE",
      payload: { index: i, value: e.target.value },
    });
  };
  return (
    <FormContext.Provider
      value={{
        state,
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
