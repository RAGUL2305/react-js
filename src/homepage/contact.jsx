import React, { useState, useEffect } from "react";
import "./mock.css";

export default function Contact() {
  const url = "https://66e14386c831c8811b54437e.mockapi.io/profile";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => {
        setData(d);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <table className="details-table">
        <thead>
          <tr className="details-table-rows">
            <th>id</th>
            <th>name</th> <th>mobile number</th>
            <th>gender</th> <th>dateofbirth</th> <th>work</th>
          </tr>
        </thead>
        {data.map((item, index) => (
          <tr contentEditable key={index} className="details-table-rows">
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.mobilenumber}</td>
            <td>{item.gender}</td>
            <td>{item.dateofbirth}</td>
            <td>{item.work}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
