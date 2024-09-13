import React, { useState } from "react";
import "./details.css";
import _ from "lodash";
import Details from "./viewall.jsx";

export default function Contents({ values, setValues, details, setDetails }) {
  
  const handleDeleteClick = (item) => {
    setValues((arg) => arg.filter((option) => option !== item));
  };
  
  const handleEditChange = (i, e) => {
    setValues((prevValues) =>
      prevValues.map((item, index) =>
        index === i ? { ...item, review: e } : item
      )
    );
  };
  return (
    <div>
      <table className="details-table">
        <thead>
          <tr className="details-table-rows">
            <th>Id</th> <th>Name</th> <th>Gender</th> <th>PhoneNumber</th>
            <th>Email</th> <th>Active</th> <th>Review</th> <th>Sports</th>
            <th>Delete</th>
          </tr>
        </thead>

        {values.map((item, index) => (
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
                name="review"
                value={item.review}
                onChange={(e) => handleEditChange(index, e.target.value)}
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
      </table>
      <Details values={values} details={details} setDetails={setDetails} />
    </div>
  );
}
