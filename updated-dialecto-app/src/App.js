import Home from "./Home";
import "./styles.css";
import LanguageContextCustom from "./LanguageContext";
import ThemeContextCustom, { useCustomThemeContext } from "./ThemeContext";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <div >
        <ThemeContextCustom>
          <LanguageContextCustom>
            <Navbar />
            <Home />
          </LanguageContextCustom>
        </ThemeContextCustom>
      </div>
    </>
  );
}

export default App;
