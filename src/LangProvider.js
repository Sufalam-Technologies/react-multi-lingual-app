import { useState } from "react";
import LangContext from "./langContext";

const LangProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const updateCurrentLanguage = (lang) => {
    setCurrentLanguage(lang);
  };
  return (
    <LangContext.Provider value={{ currentLanguage, updateCurrentLanguage }}>
      {children}
    </LangContext.Provider>
  );
};

export default LangProvider;
