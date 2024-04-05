import React, { createContext, useContext, useState } from "react";

export const themeContext = createContext();

export const useCustomThemeContext = () => {
  let value = useContext(themeContext);
  return value;
};

function ThemeContextCustom({ children }) {
  const [theme, setTheme] = useState("Light");

  const changeTheme = () => {
    theme === "Light" ? setTheme("Dark") : setTheme("Light");
  };

  return (
    <>
      <themeContext.Provider value={{ theme, changeTheme }}>
        {children}
      </themeContext.Provider>
    </>
  );
}

export default ThemeContextCustom;
