import React, { createContext, useState } from "react";
  export  const LanguageContext = createContext();
export default function LanguageProvider({ children }) {

  const [language, setLangugae] = useState("tamil");

  const newLanguage = () => {
    setLangugae("english");
  };
  return (
    <LanguageContext.Provider value={{language, newLanguage}}>
      {children}
    </LanguageContext.Provider>
  );
};
