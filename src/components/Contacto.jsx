// import { Accordion } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function Navigation() {
  return (
<form>
  <div className="mb-3">
    <label for="exampleInputEmail1" class="form-label">Correo:</label>
    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="name@example.com" aria-describedby="emailHelp"/>
   </div>

   <Form.Label>Descripción:</Form.Label>
   <InputGroup className="mb-3">
       <Form.Control as="textarea" aria-label="With textarea" />
    </InputGroup>

  <button type="submit" className="btn btn-primary bg-danger" >Enviar</button>
</form>
  );
}
