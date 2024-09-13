import { useContext } from "react";
import { UserContext } from "./componentA";

export default function ComponentB() {
    const {user} = useContext(UserContext) 
  return (
    <div className="box">
      <h1>ComponentB</h1>
      {user}
    </div>
  );
};

