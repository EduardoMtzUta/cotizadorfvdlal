import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export function Calendar({calendarToSchedule}) {
  const [value, setValue] = useState();
  const [cita, setCita] = useState({
    dia: Number,
    mes: Number,
    año: Number,
    hora: Number,
    minuto: Number,
    horario: String,
  });

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (value) {
      setCita({
        dia: value.$D.toString().padStart(2,'0'),
        mes: value.$M.toString().padStart(2,'0'),
        año: value.$y,
        hora: value.$H,
        minuto: value.$m.toString().padStart(2,'0'),
        horario: value.$H >= 12 ? "pm" : "am",
      });
    }
    calendarToSchedule(cita)
  }, [value]);

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker
          label="Date&Time picker"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      {value ? (
        <Card sx={{ minWidth: 200, marginTop: 5 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              Cita
            </Typography>
            <Typography sx={{ mb: 1, mt: 1 }} color="text.secondary">
              Fecha: {cita.dia + "/" + cita.mes + "/" + cita.año}
            </Typography>
            <Typography sx={{ mb: 1 }} color="text.secondary">
              Hora: {cita.hora + ":" + cita.minuto + " " + cita.horario}
            </Typography>
            <Typography sx={{ mb: 1 }} color="text.secondary">
              {window.localStorage.getItem("nombre")}
            </Typography>
          </CardContent>
        </Card>
      ) : (
        <></>
      )}
    </>
  );
}
