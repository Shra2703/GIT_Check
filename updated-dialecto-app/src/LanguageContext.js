import React, { createContext, useContext, useState } from "react";

export const languageContext = createContext();

export const useCustomLanguageContext = () => {
  let value = useContext(languageContext);
  return value;
};

function LanguageContextCustom({ children }) {
  const [language, setLanguage] = useState("English");

  return (
    <>
      <languageContext.Provider value={{ language, setLanguage }}>
        {children}
      </languageContext.Provider>
    </>
  );
}

export default LanguageContextCustom;
