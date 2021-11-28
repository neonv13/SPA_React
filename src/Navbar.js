import { Link } from "react-router-dom";

const Navbar = () =>{
    return(
        <nav className = "navbar">
            <h1>Cinema Managment</h1>
            <div id= "links">
                <Link to="/">Home</Link>
                <Link to="/film">Films</Link>
                <Link to="/show">Shows</Link>
                <Link to="/hall">Halls</Link>
            </div>
        </nav>

    );
}

export default Navbar;