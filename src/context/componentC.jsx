import React, { useContext } from "react";
import "./context.css";
import { UserContext } from "./componentA";

export default function ComponentC() {
  const {user} = useContext(UserContext);
  return (
    <div className="box">
      <h1>ComponentC</h1>
      <h2>{`Hello again ${user}`}</h2>
    </div>
  );
}
