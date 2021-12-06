import { Link } from "react-router-dom";
import { Navbar, Container, NavbarBrand, Nav, NavDropdown } from 'react-bootstrap'


const Navigation = () => {
    return (
        <Navbar >

            <Navbar.Toggle aria-controls="responsive-navbar-nav" variant="success" id="dropdown-basic"/>
            <Navbar.Collapse id="responsive-navbar-nav">
            <Navbar.Brand as={Link} to="/">Cinema Managment</Navbar.Brand>
                <Nav className="me-auto">
                    <NavDropdown title="Panel użytkownika" id="collasible-nav-dropdown">
                        
                    <Nav.Item>
                        <Nav.Link as={Link} to="/today" title="ToDay">
                            Seanse Dzisiaj
                        </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link as={Link} to="/ongoing" title="OnGoing">
                            Seanse Trwające
                        </Nav.Link>
                    </Nav.Item>

                    </NavDropdown>
                    <NavDropdown collapseOnSelect title="Panel administratora">
                    <Nav.Item>
                        <Nav.Link as={Link} to="/films" title="Films">
                            Films
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/shows" title="Shows">
                            Shows
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/halls" title="Halls">
                            Halls
                        </Nav.Link>
                    </Nav.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
         </Navbar>
    );
}

export default Navigation;