import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
// this is the 3rd party library
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

function WithRouting() {
  // making the paths #1
  // const router = createBrowserRouter([
  //   { path: "/", element: <Home /> },
  //   { path: "/about", element: <About /> },
  //   { path: "/contact", element: <Contact /> },
  // ]);

  // #2
  const routes = createRoutesFromElements(
    <>
      <Route path="/" element = {<Home />}></Route>
      <Route path="/about" element = {<About />}></Route>
      <Route path="/contact" element = {<Contact />}></Route>
    </>,
  )

  const router = createBrowserRouter(routes)
  return (
    <>
      <h1>Using React Router</h1>
      <RouterProvider router={router} />
    </>
  );
}

export default WithRouting;
