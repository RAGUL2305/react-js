import React from "react";
import { useFormContext } from "./provider";
import "./details.css";
import _ from "lodash";
import Details from "./viewall";

export default function Contents() {
  const { state,handleDeleteClick,handleEditChange } = useFormContext();
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
                name="review"
                value={item.review}
                onChange={(e) => handleEditChange(index, e)}
                className="none"
              />
            </td>
            <td>{item.sports}</td>

            <td>
              <button
                className="delete"
                onClick={() => handleDeleteClick(item.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </table>
      <Details values={state.values} details={state.details} />
    </div>
  );
}
