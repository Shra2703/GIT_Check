import HeaderOne from "./HeaderOne";
import HeaderTwo from "./HeaderTwo";
function App() {
  return (
    <>
    {/* both of them having same styling becase we are using index.css file but what if we want to change the styling of header 1 same name of the class it will clash means if we another file having name of the class same then the 2nd file will overwrite the content of another file because index.css have global scope */}
    {/* that's why we use styled components and css modules they are having local scope */}
    <HeaderOne />
    <hr/>
    {/* <hr /> */}
    <HeaderTwo />

    </>
  );
}

export default App;
