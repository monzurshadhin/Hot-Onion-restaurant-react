import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../../hooks/useAuth";
import useHandleCart from "../../../hooks/useHandleCart";
import logo from "../../../images/logo2.png";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
  const {foodCart,cartQuantity} = useHandleCart();
  
  return (
    <Navbar className="navbar" expand="lg" sticky="top">
      <Container>
        {
          console.log(cartQuantity)
        }
        <Navbar.Brand href="#home">
          {" "}
          <img className="logo" src={logo} alt="" />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={HashLink} to="/home#home">
              Home
            </Nav.Link>
            <Nav.Link as={HashLink} to="home#items">
              Items
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#about_us">
              About us
            </Nav.Link>

            <Nav.Link as={Link} to="/cart">
              <i className="fas fa-shopping-cart position-relative">
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartQuantity}
                </span>
              </i>
            </Nav.Link>
            {user?.displayName ? (
              <>
                <Navbar.Text>
                  <a className="user-name" href="#login">
                    {user.displayName}
                  </a>
                </Navbar.Text>
                <button className="logout-btn" onClick={logOut}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/register">
                  <button className="signUp-btn">Sign up</button>
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
