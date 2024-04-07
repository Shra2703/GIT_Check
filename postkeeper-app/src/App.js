import PostkeeperContext from "./postkeeperContext";
import Navbar from "./Navbar";
import Home from "./Home";
function App() {
  return (
    <>
     <PostkeeperContext>
      <Navbar/>
      <Home/>
     </PostkeeperContext>
    </>
  );
}

export default App;
