/* eslint-disable no-unused-expressions */
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';


export default function Menu(props) {

  return (

    <Navbar expand="lg"
      style={{
        background: "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
        height: "150px"
      }}>
      <Navbar.Brand href="#home"
        style={{
          fontSize: "3.00rem",
          fontWeight: "bolder",
          fontFamily: "'Press Start 2P', 'cursive'"
        }}>
        Xstitch</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"
          style={{
            fontSize: "1.5em",
            paddingTop: "25px"
          }}>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Create</Nav.Link>
          <NavDropdown title="Menu" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1"
              onClick={() => props.setPattern(true)}
              style={{
                marginTop: "none",
                fontSize: "20px",
                padding: "15px",
                fontFamily: "'Press Start 2P', 'cursive'"
              }}>
              {/* Need to ad functionality to open and close side menu */}
              My Patterns
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2"
              style={{
                marginBottom: "none",
                fontSize: "20px",
                padding: "15px",
                fontFamily: "'Press Start 2P', 'cursive'"

              }}>
              {/* Need to ad functionality to open and close side menu */}
              Favourites
            </NavDropdown.Item>

          </NavDropdown>
        </Nav>

        <Button variant="outline-success"

          style={{
            color: "powderblue",
            background: "#2884a7",
            padding: "5px",
            margin: "10px",
            fontSize: "20px",
            fontWeight: "bolder",
            marginTop: "40px",
            borderColor: "none"
          }}>
          Sign Up
        </Button>
        <Button variant="outline-success"
          style={{
            color: "powderblue",
            background: "#2884a7",
            padding: "5px",
            margin: "10px",
            fontSize: "20px",
            fontWeight: "bolder",
            marginTop: "40px",
            borderColor: "none"
          }}>
          Login
        </Button>
      </Navbar.Collapse>
    </Navbar >
  )
}