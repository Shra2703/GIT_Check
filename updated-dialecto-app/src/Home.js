import React from "react";
import { useCustomLanguageContext } from "./LanguageContext";
import { useCustomThemeContext } from "./ThemeContext";

const content = {
  English:
    "The cat sat lazily on the windowsill, basking in the warm sunshine and occasionally twitching its tail.",
  Hindi:
    "बिल्ली खिड़की पर आलस्य से बैठी थी, गर्म धूप का आनंद ले रही थी और कभी-कभी अपनी पूंछ को हिलाती थी।",
  Marathi:
    "मांजर खिडकीवर आळशीपणे बसली, उबदार सूर्यप्रकाशात बासिंग करत आणि अधूनमधून तिची शेपटी वळवत.",
};

function Home(props) {
  const { language, setLanguage } = useCustomLanguageContext();
  const { theme } = useCustomThemeContext();
  return (
    <>
      <div className={`${theme}`}>
        <div className="language-container">
          <span onClick={() => setLanguage("English")}>English</span>
          <span onClick={() => setLanguage("Hindi")}>Hindi</span>
          <span onClick={() => setLanguage("Marathi")}>Marathi</span>
        </div>
        <p>{content[language]}</p>
      </div>
    </>
  );
}

export default Home;
