const Navbar = (props) => {
    const {setPage} = props;
return(
    <>
        <ul>
            <li onClick={() => setPage("home")}>Home</li>
            <li onClick={() => setPage("about")}>ABout</li>
            <li onClick={() => setPage("contact")}>Contact</li>

        </ul>
    </>
)
}

export default Navbar