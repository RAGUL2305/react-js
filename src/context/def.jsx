import React from "react";
import { useFormContext } from "./abc";
export default function Details({ data }) {
  const {
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
  } = useFormContext();
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
                  value={formData.name}
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
                  checked={formData.gender === "Male"}
                  onChange={handleChange}
                  required
                />
                Male
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formData.gender === "Female"}
                  onChange={handleChange}
                  required
                />
                Female
                <input
                  type="radio"
                  name="gender"
                  value="Others"
                  checked={formData.gender === "Others"}
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
                  value={formData.phone}
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
                  value={formData.email}
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
                  checked={formData.active === "true"}
                  onChange={handleChange}
                  required
                />
                true
                <input
                  type="radio"
                  name="active"
                  value="false"
                  checked={formData.active === "false"}
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
                  value={formData.review}
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
                  value={selectedItems}
                  onChange={handleChange}
                  placeholder="Select your option"
                  onClick={handleClick}
                />
                {selected &&
                  data.map((item, index) => (
                    <div key={index}>
                      <input
                        type="checkbox"
                        onChange={() => handleCheckboxChange(item)}
                        checked={selectedItems.includes(item)}
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
          {values.map((item, index) => (
            <tr key={index} className="details-table-rows">
              <td>{item.id}</td> <td>{item.name}</td> <td>{item.gender}</td>
              <td>{item.phone}</td> <td>{item.email}</td> <td>{item.active}</td>
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
        </tbody>
      </table>
      <div>
        <button className="det" onClick={handleDetailsClick}>
          View all details
        </button>
      </div>
      <div className="accordion">
        {details &&
          values.map((item, index) => (
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
