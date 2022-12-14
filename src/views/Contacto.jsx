import { Container } from "react-bootstrap";

import Contacto from "../components/Contacto";

export default () => {
  return (
    <Container className="pt-5 text-center">
      <h1 className="mb-4">Cuéntanos, ¿ en que te podemos ayudar?</h1>
      <Contacto />
    </Container>
  );
};
