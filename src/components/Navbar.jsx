import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom"

export default function Navigation() {
  return (
    <>
      <Navbar bg="danger" variant="dark">
        <Container className="justify-content-start">
           <Link to="/" className="text-white ms-3 text-decoration-none">
            <Navbar.Brand>🏠</Navbar.Brand>
            Home
          </Link>
          <Link to="/contacto" className="text-white ms-3 text-decoration-none">
            <Navbar.Brand>📔</Navbar.Brand>
            Contacto
          </Link>
          <Navbar.Collapse className="justify-content-end">
          <Navbar.Brand>Happy Cake 🍰</Navbar.Brand>
        </Navbar.Collapse>
        </Container>

      </Navbar>
    </>
  );
}
