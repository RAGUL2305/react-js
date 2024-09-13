import React, { createContext, useState } from "react";
import "./context.css";
export const UserContext = createContext();

export default function ComponentA({ children }) {
  const [user, setUser] = useState("Ragul");
  const Clixk = () => {
    setUser("Gopi");
  };
  return (
    <div className="box">
      <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
    </div>
  );
}
