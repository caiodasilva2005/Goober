import { Box, Grid, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const LocationSelector = ({ name, onSelect }) => {
  const [selected, setSelected] = useState(false);

  return (
    <Box
      sx={{
        bgcolor: selected === false ? "white" : "#84ec8f",
        borderRadius: 2,
        "&:hover": {
          bgcolor: selected === false ? "#dadada" : undefined,
          border: 1,
          borderColor: selected === false ? "gray" : "#137e1e",
        },
      }}
      onClick={onSelect}
    >
      <Grid container spacing={1} padding={2}>
        <Grid item xs={4}>
          <Typography variant="body1">{name}</Typography>
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="outlined-read-only-input"
            label="X"
            defaultValue="0"
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
            defaultValue="0"
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
