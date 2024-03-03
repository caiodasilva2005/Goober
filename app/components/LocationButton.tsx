import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { Badge, OverlayTrigger } from "react-bootstrap";

const LocationButton = ({ location, onLocSelect }) => {
  const buttonSize = 50;
  const widthOffset = 10;
  const heightOffset = 20;

  function LocToPos(locPos) {
    return locPos * 5 + "%"; //model is 11 x 18 units, where every unit is 5%
  }

  return (
    <OverlayTrigger
      key={location.id}
      placement="bottom"
      overlay={
        <Box
          sx={{
            paddingInline: 1,
            bgcolor: "#1fbde5",
            borderRadius: 1,
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
              fontSize: 14,
              color: "white ",
              textAlign: "center",
            }}
          >
            {location.name} <br /> ({location.Xpos}, {location.Ypos})
          </Typography>
        </Box>
      }
    >
      <Box
        position="absolute"
        top={LocToPos(location.Ypos)}
        left={LocToPos(location.Xpos)}
        onClick={() => onLocSelect(location)}
        onMouseEnter={() => {
          console.log("mouse enter");
        }}
        sx={{
          padding: 1,
          borderRadius: 2,
          height: buttonSize + heightOffset,
          width: buttonSize + widthOffset,
          bgcolor: location.occupied === false ? undefined : "#fc9c98",
          "&:hover": {
            translate: "0px -10px",
            height: buttonSize + heightOffset + 10,
          },
        }}
      >
        <Image
          src="/point.png"
          alt="waypoint"
          width={buttonSize}
          height={buttonSize}
        />
      </Box>
    </OverlayTrigger>
  );
};

export default LocationButton;
