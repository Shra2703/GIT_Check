import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";
import { useState } from "react";


// This is with the help conditional rendering 
// Conditional rendering: have the disadvantage that the url will display
function WithoutRouter() {
  const [page, setPage] = useState("home");
  return (
    <>
      <Navbar setPage = {setPage}></Navbar>
      {page === "home" && <Home />}
      {page === "about" && <About />}
      {page === "contact" && <Contact />}
    </>
  )
}

export default WithoutRouter;
