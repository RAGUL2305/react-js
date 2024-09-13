import React, { useState, useEffect } from "react";
import "./mock.css";
export default function Mock() {
  const url = "https://66e14386c831c8811b54437e.mockapi.io/new";
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

   if(loading) return <p>Please wait...</p>;
   
  return (
    <div>
        <table className="details-table">
          <thead>
            <tr className="details-table-rows">
              <th>id</th> <th>first name</th> <th>last name</th>
              <th>address</th> <th>country</th> <th>phone</th> <th>gender</th>
              <th>work</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr contentEditable key={index} className="details-table-rows">
                <td>{item.id}</td> <td>{item.first_name}</td>
                <td>{item.last_name}</td> <td>{item.address}</td>
                <td>{item.country}</td> <td>{item.phone}</td>
                <td>{item.gender}</td> <td>{item.work}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
}
