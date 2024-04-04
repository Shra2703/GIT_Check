import React, { useContext } from "react";
import { themeContext } from "./themeContext";
import { languageContext } from "./languageContext";

function Navbar() {
  let { theme, setTheme } = useContext(themeContext);
  let { language } = useContext(languageContext);
  const changeTheme = () => {
    if (theme === "Light") setTheme("Dark");
    else setTheme("Light");
  };
  return (
    <div className="navbar">
      <span>Dialecto</span>
      <div className="right">
        <button onClick={changeTheme}>{theme}</button>
        <span>{language}</span>
      </div>
    </div>
  );
}

export default Navbar;
