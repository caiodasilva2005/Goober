import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";

const LocationButton = ({ location, onLocSelect }) => {
  return (
    <Box onClick={() => onLocSelect(location)}>
      <Image src="/point.png" alt="waypoint" width="50" height="50" />
    </Box>
  );
};

export default LocationButton;
