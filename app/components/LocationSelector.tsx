import { Box, Grid, TextField, Typography } from "@mui/material";
import React from "react";

const LocationSelector = ({ car, onSelect }) => {
  return (
    <Box
      sx={{
        bgcolor: car.selected === false ? "white" : "#84ec8f",
        borderRadius: 2,
        "&:hover": {
          bgcolor: car.selected === false ? "#dadada" : undefined,
          border: 1,
          borderColor: car.selected === false ? "gray" : "#137e1e",
        },
      }}
      onClick={onSelect}
    >
      <Grid container spacing={1} padding={2}>
        <Grid item xs={4}>
          <Typography variant="body1">{car.id}</Typography>
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="outlined-read-only-input"
            label="X"
            defaultValue={
              car.selectedLocation === undefined ? 0 : car.selectedLocation.Xpos
            }
            size="small"
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="outlined-read-only-input"
            label="Y"
            defaultValue={
              car.selectedLocation === undefined ? 0 : car.selectedLocation.Ypos
            }
            size="small"
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default LocationSelector;
