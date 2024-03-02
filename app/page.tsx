"use client";
import { Box, Grid, Typography } from "@mui/material";
import RunButton from "./components/RunButton";
import LocationSelectors from "./components/LocationSelectors";
import { useState } from "react";
import { Car, Location } from "./types/types";
import LocationButton from "./components/LocationButton";

export default function Home() {
  const [cars, setCars] = useState<Car[]>([
    {
      id: 1,
      selected: false,
    },
    {
      id: 2,
      selected: false,
    },
    {
      id: 3,
      selected: false,
    },
  ]);

  const [locations, setLocations] = useState<Location[]>([
    {
      id: 1,
      name: "loc1",
      Xpos: 1,
      Ypos: 1,
      occupied: false,
    },
    {
      id: 2,
      name: "loc2",
      Xpos: 2,
      Ypos: 2,
      occupied: false,
    },
    {
      id: 3,
      name: "loc3",
      Xpos: 3,
      Ypos: 3,
      occupied: false,
    },
  ]);
  const handleRun = () => {
    console.log("Running cars");
    const updatedCars = cars.map((car) => ({
      ...car,
      selected: false,
    }));
    setCars(updatedCars);
  };

  const handleSelect = (selectedCar: Car) => {
    const updatedCars = cars.map((car) => ({
      ...car,
      selected: car.id === selectedCar.id ? !car.selected : false,
    }));
    setCars(updatedCars);
  };

  function occupyLocation(selectedLocation: Location) {
    const updatedLocations = locations.map((location) => ({
      ...location,
      occupied: location.id === selectedLocation.id ? true : location.occupied,
    }));
    console.log(updatedLocations);
    setLocations(updatedLocations);
  }

  const handleLocation = (location: Location) => {
    const selectedIndex = cars.findIndex((car) => car.selected);
    let updatedCars = [...cars];
    if (selectedIndex !== -1) {
      updatedCars[selectedIndex].location = location;
      occupyLocation(location);
      if (selectedIndex !== cars.length - 1)
        handleSelect(updatedCars[selectedIndex + 1]);
      else handleSelect(updatedCars[0]);
    } else {
      handleSelect(updatedCars[0]);
    }
  };

  return (
    <main>
      <Grid container>
        <Grid item xs={7}>
          <LocationButton
            location={locations[0]}
            onLocSelect={handleLocation}
          />
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
              <LocationSelectors cars={cars} onSelect={handleSelect} />
            </Box>
            <RunButton onRun={handleRun} />
          </Box>
        </Grid>
      </Grid>
    </main>
  );
}
