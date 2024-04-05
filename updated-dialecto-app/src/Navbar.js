import React from "react";
import { useCustomThemeContext } from "./ThemeContext";
import { useCustomLanguageContext } from "./LanguageContext";

function Navbar() {
  const { theme, changeTheme } = useCustomThemeContext();
  const { language } = useCustomLanguageContext();

  return (
    <>
      <div className="navbar">
        <span>Dialecto</span>
        <div className="right">
          <button onClick={changeTheme}>{theme}</button>
          <span>{language}</span>
        </div>
      </div>
    </>
  );
}

export default Navbar;
