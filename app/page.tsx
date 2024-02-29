import { Box, Grid, Container, Typography, Stack } from "@mui/material";
import LocationSelector from "./components/LocationSelector";

export default function Home() {
  return (
    <main>
      <Grid container>
        <Grid item xs={7}></Grid>
        <Grid item xs={5}>
          <Container fixed>
            <Box sx={{ bgcolor: "white", height: "100vh" }}>
              <Typography
                variant="h1"
                align="center"
                sx={{
                  padding: 2,
                  fontWeight: "bold",
                  fontStyle: "italic",
                  color: "yellow",
                }}
              >
                GOOBER
              </Typography>
              <Stack spacing={4}>
                <LocationSelector />
                <LocationSelector />
              </Stack>
            </Box>
          </Container>
        </Grid>
      </Grid>
    </main>
  );
}
