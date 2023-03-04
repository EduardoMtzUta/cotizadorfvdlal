import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Services } from "./Services";
import { Calendar } from "./Calendar";
import { ServicesCarrusel } from "./ServicesCarrusel";
import { Button } from "@mui/material";
import emailjs from "@emailjs/browser";
import{useNavigate} from "react-router-dom"
import Swal from 'sweetalert2'

export function Schedule() {
  const [data, setData] = useState({
    nombre: window.localStorage.getItem("nombre"),
    correo: window.localStorage.getItem("correo"),
    telefono: window.localStorage.getItem("telefono"),
    empresa: window.localStorage.getItem("empresa"),
    ubicacion: window.localStorage.getItem("ubicacion"),
  });

  const [servicesCarrusel, setServicesCarrusel] = useState([]);
  const [calendar, setCalendar] = useState({});
  
  const navigate = useNavigate()

  const servicesToSchedule = (data) => {
    setServicesCarrusel([...servicesCarrusel, data]);
  };

  const calendarToSchedule = (data) => {
    setCalendar(data);
  };

  const handleOnClickAgendar = () => {
    let templateParams = {
      nombre: data.nombre,
      correo: data.correo,
      telefono: data.telefono,
      empresa: data.empresa,
      ubicacion: data.ubicacion,
      fecha: calendar.dia + "/" + calendar.mes + "/" + calendar.año,
      hora: calendar.hora + ":" + calendar.minuto + "  " + calendar.horario,
      servicios: servicesCarrusel.map((row)=> row.nombre+" "),
    };

    emailjs
      .send(
        "service_w6vzc2i",
        "template_m8826he",
        templateParams,
        "9F-UkDkxGn4g_RqdW"
      )
      .then(() => (
        Swal.fire('En breve recibiras respuesta de nuestro equipo').then(
          navigate("/")
        )
      ))
      .catch((e) => console.log(e));
  };

  return (
    <>
      <Container>
        <Row className="mt-5">
          <h4 style={{ textAlign: "center" }}>Servicios</h4>
        </Row>
        <Row className="mt-5">
          <Col xs={10}>
            <Row>
              <Services servicesToSchedule={servicesToSchedule} />
            </Row>
          </Col>
          <Col xs={2}>
            <Row>
              <Calendar calendarToSchedule={calendarToSchedule} />
            </Row>
            <Row>
              <ServicesCarrusel props={servicesCarrusel} />
            </Row>
            <Row>
              <Button
                sx={{ marginTop: 10 }}
                variant="contained"
                onClick={() => handleOnClickAgendar()}
              >
                Enviar email
              </Button>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
