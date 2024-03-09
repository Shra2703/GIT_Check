import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Navbar1 from "./Components/Navbar1";
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

  // this is the way by which we are linking the nav bar to the other component
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar1 />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
      ],
    },
  ]);

  // #2
  // const routes = createRoutesFromElements(
  //   <>
  //     <Route path="/" element={<Home />}></Route>
  //     <Route path="/about" element={<About />}></Route>
  //     <Route path="/contact" element={<Contact />}></Route>
  //   </>
  // );

  // const router = createBrowserRouter(routes);
  return (
    <>
      <h1>Using React Router</h1>
      <RouterProvider router={router} />
    </>
  );
}

export default WithRouting;
