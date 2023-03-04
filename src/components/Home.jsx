import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { DataForm } from "./DataForm";

export function Home() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h4" align="center" sx={{marginTop: 10}}>Cotiza tu servicio</Typography>
        <Grid container sx={{ marginTop: 10 }}>
          <Grid item xs={3}></Grid>
          <Grid item xs={6} sx={{ border: 1, padding: 5 }}>
            <Grid item>
              <Typography variant="h6" align="left">
                Proporciona tus datos de contacto
              </Typography>
            </Grid>
            <Grid item>
              <Box>
                <DataForm></DataForm>
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </Box>
    </>
  );
}
