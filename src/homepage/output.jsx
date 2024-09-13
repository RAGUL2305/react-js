import React, { useState } from "react";
import Home from "./home";
import Profile from "./profile"; 
import Work from "./work";
import Contact from "./contact";
import "./mock.css";

export default function Output() {
  const [view, setView] = useState("home");

  const handleOptionClick = (e) => {
    setView(e);
  };
  const handleClick = () => {
    switch (view) {
      case "home":
        return <Home />;
     case "profile":
        return <Profile />
     case "work":
        return <Work />
    case "contact" :
        return <Contact/> 
      default:
        return <Home />;
    }
  };
  return (
    <div>
      <div className="but">
        <button onClick={() => handleOptionClick("home")}>🏠HOME</button>
        <button onClick={() => handleOptionClick("profile")}>👤PROFILE</button>
        <button onClick={() => handleOptionClick("work")}>🛠️WORK</button>
        <button onClick={() => handleOptionClick("contact")}>📞CONTACT</button>
      </div>
      <div>{handleClick()}</div>
    </div>
  );
}
