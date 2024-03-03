"use client";
import { Box, Grid, Typography } from "@mui/material";
import RunButton from "./components/RunButton";
import LocationSelectors from "./components/LocationSelectors";
import { useState } from "react";
import { Car, Location } from "./types/types";
import LocationButton from "./components/LocationButton";
import Model from "./components/Model";

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
      Xpos: 5,
      Ypos: 6,
      occupied: false,
    },
    {
      id: 3,
      name: "loc3",
      Xpos: 10,
      Ypos: 2,
      occupied: false,
    },
    {
      id: 4,
      name: "loc4",
      Xpos: 9,
      Ypos: 5,
      occupied: false,
    },
    {
      id: 5,
      name: "loc5",
      Xpos: 11,
      Ypos: 18,
      occupied: false,
    },
  ]);

  function ResetSelect(cars: Car[]) {
    const updatedCars = cars.map((car) => ({
      ...car,
      selected: false,
    }));
    setCars(updatedCars);
  }

  const handleRun = () => {
    console.log("Running cars");
    ResetSelect(cars);
  };

  const handleSelect = (selectedCar: Car) => {
    const updatedCars = cars.map((car) => ({
      ...car,
      selected: car.id === selectedCar.id ? !car.selected : false,
    }));
    setCars(updatedCars);
  };

  function updateOccupied(
    selectedLocation: Location,
    previousLocation: Location | undefined
  ) {
    const updatedLocations = locations.map((location) => {
      if (previousLocation !== undefined && previousLocation.id === location.id)
        return { ...previousLocation, occupied: false };
      if (selectedLocation.id === location.id)
        return { ...selectedLocation, occupied: true };
      return location;
    });
    setLocations(updatedLocations);
  }

  function updateIndex(index: number, numCars: number) {
    if (index !== numCars - 1) return index + 1;
    else return 0;
  }

  const handleLocation = (location: Location) => {
    const selectedIndex = cars.findIndex((car) => car.selected);
    let updatedCars = [...cars];
    if (selectedIndex === -1) {
      handleSelect(updatedCars[0]);
      return;
    }

    if (location.occupied === false) {
      const previousLocation = updatedCars[selectedIndex].selectedLocation;
      updatedCars[selectedIndex].selectedLocation = location;
      updateOccupied(location, previousLocation);
      const newIndex = updateIndex(selectedIndex, cars.length);
      handleSelect(updatedCars[newIndex]);
      return;
    }

    console.log("occupied");
  };

  return (
    <main>
      <Grid container>
        <Grid item xs={7}>
          <Box>
            <Model />
            <LocationButton
              location={locations[0]}
              onLocSelect={handleLocation}
            />
            <LocationButton
              location={locations[1]}
              onLocSelect={handleLocation}
            />
            <LocationButton
              location={locations[2]}
              onLocSelect={handleLocation}
            />
            <LocationButton
              location={locations[3]}
              onLocSelect={handleLocation}
            />
          </Box>
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
