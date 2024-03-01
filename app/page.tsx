"use client";
import { Box, Grid, Typography } from "@mui/material";
import RunButton from "./components/RunButton";
import LocationSelectors from "./components/LocationSelectors";
import Model from "./components/Model";
import { useState } from "react";
import { Car } from "./types/types";

export default function Home() {
  const [cars, setCars] = useState<Car[]>([
    {
      id: 1,
      selectedX: 0,
      selectedY: 0,
      selected: false,
    },
    {
      id: 2,
      selectedX: 1,
      selectedY: 1,
      selected: false,
    },
    {
      id: 3,
      selectedX: 4,
      selectedY: 5,
      selected: false,
    },
  ]);

  const handleRun = () => {
    console.log("Running cars");
  };

  const handleChange = (updatedCars) => {
    console.log("Updated", updatedCars);
    setCars(updatedCars);
  };

  return (
    <main>
      <Grid container>
        <Grid item xs={7}>
          <Model />
        </Grid>
        <Grid item xs={5}>
          <Box
            sx={{
              padding: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              bgcolor: "white",
              height: "100vh",
              boxShadow: 3,
              borderTop: 16,
              borderBottom: 16,
              borderTopColor: "yellow",
              borderBottomColor: "yellow",
            }}
          >
            <Typography
              variant="body1"
              align="center"
              sx={{
                padding: 2,
                fontSize: 64,
                fontWeight: "bold",
                fontStyle: "italic",
                color: "yellow",
              }}
            >
              GOOBER
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
              <LocationSelectors cars={cars} onChange={handleChange} />
            </Box>
            <RunButton onRun={handleRun} />
          </Box>
        </Grid>
      </Grid>
    </main>
  );
}
