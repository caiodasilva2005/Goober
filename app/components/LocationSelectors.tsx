import React, { useState } from "react";
import { Stack } from "@mui/material";
import LocationSelector from "./LocationSelector";

const LocationSelectors = () => {
  const [selectors] = useState(["Car1", "Car2"]);

  const handleSelect = () => {
    console.log("handling selection");
  };

  return (
    <Stack spacing={2}>
      {selectors.map((selector) => (
        <LocationSelector
          key={selector}
          name={selector}
          onSelect={handleSelect}
        />
      ))}
    </Stack>
  );
};

export default LocationSelectors;
