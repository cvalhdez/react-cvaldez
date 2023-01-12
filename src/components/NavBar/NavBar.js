import { Link, NavLink } from "react-router-dom";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import CartWidget from "./CartWidget";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {

  const productName = useRef();
  const navigate = useNavigate();
  const activeClassName = "activeLink";
  
  const handleSearch = () => {
    navigate(`/search/${productName.current.value}`);
  }

  const avoidReload = (e) => {
    if (e.keyCode === 13 ) {
      e.preventDefault();
      handleSearch();
    }  
  }
  
  return (
    <Navbar expand="lg" className="navbar">
      <Container fluid>
        <Link to={"/"}>
          <img src={process.env.PUBLIC_URL + "/assets/images/logo.png"} alt = "Logo" className = "navbarLogo" />
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 d-flex align-items-center flex-md-row justify-content-md-around navbarLinks"
          >
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
              >TODAS LAS CERVEZAS
            </NavLink>
            <NavLink
              to={"/color/Cerveza Rubia"}
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
              >CERVEZAS RUBIAS
            </NavLink>
            <NavLink
              to={"/color/Cerveza tostada"}
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
              >CERVEZAS TOSTADAS
            </NavLink>
            <NavLink
              to={"/color/Cerveza negra"}
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
              >CERVEZAS NEGRAS
            </NavLink>
            <CartWidget />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;