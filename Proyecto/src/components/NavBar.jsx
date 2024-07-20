import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Pet Shop</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Medicamentos</Nav.Link>
          <Nav.Link href="#features">Veterinarias</Nav.Link>
          <Nav.Link href="#pricing">Alimentos</Nav.Link>
          <Nav.Link href="#pricing">Contacto</Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  );
};
