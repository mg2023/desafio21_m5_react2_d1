import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom"

export default function Navigation() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container className="justify-content-start">
          <Navbar.Brand>Dogstel</Navbar.Brand>
          <Link to="/" className="text-white ms-3 text-decoration-none">
            Home
          </Link>
          <Link to="/contacto" className="text-white ms-3 text-decoration-none">
            Contacto
          </Link>
        </Container>
      </Navbar>
    </>
  );
}
