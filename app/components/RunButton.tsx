import React from "react";
import { Button } from "@mui/material";

const RunButton = ({ onRun }) => {
  return (
    <Button variant="text" onClick={onRun}>
      Run Cars
    </Button>
  );
};

export default RunButton;
