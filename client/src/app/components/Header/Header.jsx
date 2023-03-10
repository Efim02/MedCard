import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./header.scss";

export default function Header() {
  return (
    <Navbar collapseOnSelect expand="md">
      <Container>
        <Navbar.Brand className="header_logo" href="#home">
          NST Medicine card
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link className="header_link" href="#home">
              Главная
            </Nav.Link>
            <Nav.Link className="header_link" href="#employes">
              Сотрудники
            </Nav.Link>
            <Nav.Link className="header_link_exit" href="#exit">
              Выход
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
