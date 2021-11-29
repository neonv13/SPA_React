import { Link } from "react-router-dom";


const Navbar = () =>{
    return(
        <nav className = "navbar">
            <h1>Cinema Managment</h1>
            <div id= "links">
                <Link to="/">Home</Link>
                <Link to="/films">Films</Link>
                <Link to="/shows">Shows</Link>
                <Link to="/halls">Halls</Link>

            </div>
        </nav>

    );
}

export default Navbar;