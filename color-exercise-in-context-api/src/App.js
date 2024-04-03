import { useState } from "react";
import Card from "./Card";
import { cardContext } from "./context";
import "./index.css"

function App() {
  const [text, setText] = useState("");
  const [color, setColor] = useState("");
  return (
    <>
      <div className="center">
        <form>
          <textarea
            type="text"
            value={text}
            placeholder="What you think"
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          <input
            value={color}
            placeholder="Choose Your Color..."
            onChange={(e) => setColor(e.target.value)}
          />
        </form>
      </div>

      <cardContext.Provider value={{  text, color }}>
        <Card />
      </cardContext.Provider>
    </>
  );
}

export default App;


