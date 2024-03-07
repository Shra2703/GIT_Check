import { useState } from "react";
import WithRouting from "./WithRouting";
import WithoutRouter from "./WithoutRouter";

function App() {
  const [page, setPage] = useState("");
  return (
    <>
      <div>
        <h1>Learning Routing</h1>
        <button onClick={() => setPage("withRouting")}>With Routing</button>
        <button onClick={() => setPage("withOutRouting")}>
          Without Routing
        </button>
        {page === "withRouting" && <WithRouting />}
        {page === "withOutRouting" && <WithoutRouter />}
      </div>
    </>
  );
}

export default App;
