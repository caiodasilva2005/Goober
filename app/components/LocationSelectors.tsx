import React from "react";
import { Stack } from "@mui/material";
import LocationSelector from "./LocationSelector";
import { Car } from "../types/types";

const LocationSelectors = ({ cars, onChange }) => {
  const handleSelect = (selectedCar: Car) => {
    const updatedCars = cars.map((car) => ({
      ...car,
      selected: car.id === selectedCar.id ? !car.selected : false,
    }));
    onChange(updatedCars);
  };

  return (
    <Stack spacing={2}>
      {cars.map((car) => (
        <LocationSelector
          key={car.id}
          car={car}
          onSelect={() => handleSelect(car)}
        />
      ))}
    </Stack>
  );
};

export default LocationSelectors;
