import React, { useContext } from "react";
import "./context.css";
import { UserContext } from "./componentA";

export default function ComponentD() {
  const {user} = useContext(UserContext);
  return (
    <div className="box">
      <h1>ComponentD</h1>
      <h2>{`Bye ${user}`}</h2>
    </div>
  );
}
