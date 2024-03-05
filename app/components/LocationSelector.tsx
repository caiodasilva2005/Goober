import { Box, Grid, TextField } from "@mui/material";
import React from "react";
import Image from "next/image";

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
      <Grid container spacing={1} padding={2} alignItems="center">
        <Grid item xs={3}>
          <Image
            src={`/Car${car.id}.png`}
            alt={`Car ${car.id}`}
            width="100"
            height="50"
          />
        </Grid>
        <Grid item xs={5}>
          <TextField
            error={car.error}
            helperText={car.error && "Location Is Occupied"}
            id="outlined-read-only-input"
            label="Location"
            defaultValue={
              car.selectedLocation === undefined
                ? " "
                : car.selectedLocation.name
            }
            size="small"
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid item xs={2}>
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
        <Grid item xs={2}>
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
