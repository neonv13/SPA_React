import { Link } from "react-router-dom";
import { Navbar, Container, NavbarBrand, Nav, NavDropdown } from 'react-bootstrap'


const Navigation = () => {
    return (
        <Navbar>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Navbar.Brand href="/">Cinema Managment</Navbar.Brand>
                <Nav className="me-auto">
                    <NavDropdown title="Panel użytkownika" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#">Something</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Panel administratora">
                        <NavDropdown.Item href="films">Filmy</NavDropdown.Item>
                        <NavDropdown.Item href="halls">Sale kinowe</NavDropdown.Item>
                        <NavDropdown.Item href="shows">Seanse</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
         </Navbar>
    );
}

export default Navigation;