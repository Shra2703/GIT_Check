import { Link, NavLink, Outlet } from "react-router-dom";

const Navbar1 = () => {
  return (
    <>
      {/* Link attribute will not style that when we are in that link (you are changing the page)*/}
      {/* <Link to="/">Home</Link> <br /> <br /> */}
      <NavLink
        style={({ isActive }) =>
          isActive === true ? { color: "pink" } : undefined
        }
        to="/"
      >
        Home
      </NavLink>{" "}
      <br /> <br />
      <NavLink
        style={({ isActive }) =>
          isActive === true ? { color: "pink" } : undefined
        }
        to="/about"
      >
        About
      </NavLink>{" "}
      <br /> <br />
      <NavLink
        style={({ isActive }) =>
          isActive === true ? { color: "pink" } : undefined
        }
        to="/contact"
      >
        Contact Us
      </NavLink>{" "}
      <br /> <br />
      <NavLink
        style={({ isActive }) =>
          isActive === true ? { color: "pink" } : undefined
        }
        to="/items"
      >
        {" "}
        Items
      </NavLink>{" "}
      <br />
      {/* by this outlet all the other component content will be seen on screen */}
      <Outlet />
    </>
  );
};

export default Navbar1;
