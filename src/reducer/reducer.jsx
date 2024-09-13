import React, { useReducer, useRef } from "react";
import "./details.css";
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
      if (!newValues.some((item) => item.name === state.formData.name)) {
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
        (item) => item.id !== action.payload.id
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
export default function Details(props) {
  let { data } = props;
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
    dispatch({ type: "HANDLE_DELETE", payload: { id: item.id } });
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
    <div>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>
                <input
                  ref={inputRef}
                  type="text"
                  name="name"
                  value={state.formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={state.formData.gender === "Male"}
                  onChange={handleChange}
                  required
                />
                Male
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={state.formData.gender === "Female"}
                  onChange={handleChange}
                  required
                />
                Female
                <input
                  type="radio"
                  name="gender"
                  value="Others"
                  checked={state.formData.gender === "Others"}
                  onChange={handleChange}
                  required
                />
                Others
              </td>
            </tr>
            <tr>
              <td>Phone Number</td>
              <td>
                <input
                  type="tel"
                  name="phone"
                  value={state.formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your number"
                  maxLength={10}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>Email</td>
              <td>
                <input
                  type="email"
                  name="email"
                  value={state.formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </td>
            </tr>
            <tr>
              <td>Active</td>
              <td>
                <input
                  type="radio"
                  name="active"
                  value="true"
                  checked={state.formData.active === "true"}
                  onChange={handleChange}
                  required
                />
                true
                <input
                  type="radio"
                  name="active"
                  value="false"
                  checked={state.formData.active === "false"}
                  onChange={handleChange}
                  required
                />
                false
              </td>
            </tr>
            <tr>
              <td>Review</td>
              <td>
                <input
                  type="text"
                  name="review"
                  value={state.formData.review}
                  onChange={handleChange}
                  placeholder="Enter your review"
                  required
                />
              </td>
            </tr>
            <tr>
              <td>Sports</td>
              <td>
                <input
                  value={state.selectedItems}
                  onChange={handleChange}
                  placeholder="Select your option"
                  onClick={handleClick}
                />
                {state.selected &&
                  data.map((item, index) => (
                    <div key={index}>
                      <input
                        type="checkbox"
                        onChange={() => handleCheckboxChange(item)}
                        checked={state.selectedItems.includes(item)}
                      />
                      {item}
                    </div>
                  ))}
              </td>
            </tr>
            <tr>
              <td>
                <button className="sum" type="submit">
                  Submit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      <table className="details-table">
        <thead>
          <tr className="details-table-rows">
            <th>Id</th> <th>Name</th> <th>Gender</th> <th>PhoneNumber</th>
            <th>Email</th> <th>Active</th> <th>Review</th> <th>Sports</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {state.values.map((item, index) => (
            <tr key={index} className="details-table-rows">
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.gender}</td>
              <td>{item.phone}</td>
              <td>{item.email}</td>
              <td>{item.active}</td>
              <td>
                <input
                  type="text"
                  value={item.review}
                  onChange={(e) => handleEditChange(index, e)}
                  className="none"
                />
              </td>
              <td>{item.sports}</td>
              <td>
                <button
                  className="delete"
                  onClick={() => handleDeleteClick(item)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button className="det" onClick={handleDetailsClick}>
          View all details
        </button>
      </div>

      <div className="accordion">
        {state.details &&
          state.values.map((item, index) => (
            <div key={index} className="accordion-answer">
              {Object.entries(item).map(([key, value], j) => (
                <div key={j} className="view-details-list">
                  <span>{key}:</span>
                  <span className="view-details-list-value">{value}</span>
                </div>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
}
