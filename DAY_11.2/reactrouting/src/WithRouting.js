import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Items from "./Pages/Items";
import Navbar1 from "./Components/Navbar1";
import Error from "./Pages/Error";
// this is the 3rd party library
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import ItemDetails from "./Pages/ItemDetails";

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
      // when we want to give something instead of main path
      // path: "/root",
      element: <Navbar1 />,
      errorElement: <Error />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },

        // Dynamic Routing
        // :itenId = is the param #1
        // { path: "/items", element: <Items /> },
        // { path: "/items/:id", element: <ItemDetails /> },

        // #2 nested routes
        {
          path: "/items",
          children: [
            { index: true, element: <Items /> },
            { path: ":id", element: <ItemDetails /> },
          ],
        },

        // absolute paths: in absolute path we have to give the complete url in navbar as well as here
        // { path: "/root", element: <Home /> },
        // { path: "/root/about", element: <About /> },
        // { path: "/root/contact", element: <Contact /> },

        // for relative paths
        // {index:true, element: <Home /> },
        // { path: "about", element: <About /> },
        // { path: "contact", element: <Contact /> },
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

  // for navbar is the parent one
  // const routes = createRoutesFromElements(
  //   <>
  // <Route path="/" element={<Navbar1 />}>
  //     <Route index element={<Home />}></Route>
  //     <Route path="/about" element={<About />}></Route>
  //     <Route path="/contact" element={<Contact />}>
  // </Route>
  // </Route>
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
