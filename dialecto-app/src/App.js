import { useState } from "react";
import { themeContext } from "./themeContext";
import { languageContext } from "./languageContext";
import Navbar from "./Navbar";
import Home from "./Home";
import "./styles.css";
function App() {
  const [theme, setTheme] = useState("Light");
  const [language, setLanguage] = useState("English");
  return (
    <>
      <div className={theme}>
        <themeContext.Provider value={{ theme, setTheme }}>
          <languageContext.Provider value={{ language, setLanguage }}>
            <Navbar />
            <Home />
          </languageContext.Provider>
        </themeContext.Provider>
      </div>
    </>
  );
}

export default App;
