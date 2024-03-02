import React from "react";
import { Stack } from "@mui/material";
import LocationSelector from "./LocationSelector";
import { Car } from "../types/types";

const LocationSelectors = ({ cars, onSelect }) => {
  return (
    <Stack spacing={2}>
      {cars.map((car) => (
        <LocationSelector
          key={car.id}
          car={car}
          onSelect={() => onSelect(car)}
        />
      ))}
    </Stack>
  );
};

export default LocationSelectors;
