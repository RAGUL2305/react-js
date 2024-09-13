import React from "react";
import { useFormContext } from "./provider";
import Sports from "./sports";
import "./details.css";
import _ from "lodash";

export default function FormData() {
  const {
    state,
    handleChange,
    handleSubmit,
    inputRef,
  } = useFormContext();

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <table>
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
          <td>Sports</td>
          <Sports
            selected={state.selected}
            selectedItems={state.selectedItems}
          />
          <tr>
            <td>
              <button className="sum" type="submit">
                Submit
              </button>
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
}
