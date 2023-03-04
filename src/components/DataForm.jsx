import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { estados } from "../data/estados";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function DataForm() {
  const navigate = useNavigate();
  const [bandera, setBandera] = useState(true);
  const [actualizar, setActualizar] = useState(0);

  const [data, setData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    empresa: "",
    ubicacion: "",
  });

  const handleOnChange = (e) => {
    switch (e.target.name) {
      case "nombre":
        data.nombre = e.target.value;
        window.localStorage.setItem("nombre", e.target.value)
        setActualizar(actualizar + 1);
        break;
      case "correo":
        data.correo = e.target.value;
        window.localStorage.setItem("correo", e.target.value)
        setActualizar(actualizar + 1);
        break;

      case "telefono":
        data.telefono = e.target.value;
        window.localStorage.setItem("telefono", e.target.value)
        setActualizar(actualizar + 1);
        break;
      case "empresa":
        data.empresa = e.target.value;
        window.localStorage.setItem("empresa", e.target.value)
        setActualizar(actualizar + 1);
        break;
      case "ubicacion":
        data.ubicacion = e.target.value;
        window.localStorage.setItem("ubicacion", e.target.value)
        setActualizar(actualizar + 1);
        break;

      default:
        break;
    }
  };

  const handleOnClick = (e) => {
    e.preventDefault();
    navigate("/cita");
  };

  useEffect(() => {
    if (data.nombre != "" && data.correo != "" && data.telefono != "") {
      setBandera(false);
    } else {
      setBandera(true);
    }
    if(data.empresa === ""){
      window.localStorage.setItem("empresa", "")
    }
    if(data.ubicacion === ""){
      window.localStorage.setItem("ubicacion", "")
    }
  }, [actualizar]);

  return (
    <div style={{ marginTop: 20, paddingRight: 20, paddingLeft: 20}}>
      <Form>
        <Form.Group style={{ marginTop: 5 }}>
          <Form.Label>Nombre *</Form.Label>
          <Form.Control
            type="text"
            name="nombre"
            onChange={(e) => handleOnChange(e)}
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group style={{ marginTop: 5 }}>
          <Form.Label>Correo *</Form.Label>
          <Form.Control
            type="email"
            name="correo"
            onChange={(e) => handleOnChange(e)}
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group style={{ marginTop: 5 }}>
          <Form.Label>Teléfono *</Form.Label>
          <Form.Control
            type="tel"
            name="telefono"
            onChange={(e) => handleOnChange(e)}
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group style={{ marginTop: 5 }}>
          <Form.Label>Empresa </Form.Label>
          <Form.Control
            type="text"
            name="empresa"
            onChange={(e) => handleOnChange(e)}
          ></Form.Control>
        </Form.Group>
        <Form.Group style={{ marginTop: 5 }}>
          <Form.Label>Ubicación</Form.Label>
          <Form.Select name="ubicacion" onChange={(e) => handleOnChange(e)}>
            {estados.map((row) => (
              <option value={row.nombre} key={estados.indexOf(row)}>
                {row.nombre}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <Button
          style={{ marginTop: 20, float: "right" }}
          variant="outline-success"
          type="submit"
          onClick={(e) => handleOnClick(e)}
          disabled={bandera}
        >
          Siguiente
        </Button>
      </Form>
    </div>
  );
}
