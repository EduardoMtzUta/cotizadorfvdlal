import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { servicios } from "../data/servicios";

export function Services({ servicesToSchedule }) {
  const handleOnClick = (data) => {
    servicesToSchedule(data);
  };

  return (
    <>
      {servicios.map((row) => (
        <Card
          sx={{ maxWidth: 250, marginRight: 2, marginBottom: 2 }}
          key={servicios.indexOf(row)}
        >
          <CardMedia
            sx={{ height: 140 }}
            image={row.img}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {row.nombre}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {row.descripcion}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => handleOnClick(row)}>
              Agregar
            </Button>
          </CardActions>
        </Card>
      ))}
    </>
  );
}
