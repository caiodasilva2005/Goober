import React from "react";
import Image from "next/image";
import { Box } from "@mui/material";

const Model = () => {
  return (
    <Box position="relative">
      <Image src="/model.png" alt="Model Image" width="800" height="800" />
    </Box>
  );
};

export default Model;
