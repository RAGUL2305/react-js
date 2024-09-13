import React from "react";
import { useFormContext } from "./provider";
import "./details.css";
import _ from "lodash";

export default function Details() {
  const { values, details,handleDetailsClick } = useFormContext();
  return (
    <div>
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
                <div className="view-details-list">
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
