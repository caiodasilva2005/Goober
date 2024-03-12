import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { OverlayTrigger } from "react-bootstrap";

const LocationButton = ({ location, onLocSelect }) => {
  const buttonSize = 50;
  const widthOffset = 10;
  const heightOffset = 20;

  function LocToPos(locPos: number) {
    return locPos * 5 + "%"; //model is 11 x 18 units, where every unit is 5%
  }

  return (
    <OverlayTrigger
      key={location.id}
      placement="bottom"
      overlay={({
        placement: _placement,
        arrowProps: _arrowProps,
        show: _show,
        popper: _popper,
        hasDoneInitialMeasure: _hasDoneInitialMeasure,
        ...props
      }) => (
        <Box {...props}>
          {location.occupied ? (
            <Box
              sx={{
                bgcolor: "white",
                border: 2,
                borderColor: "gray",
                borderRadius: 2,
                width: 80,
                height: 50,
              }}
            >
              <Image
                src={`/Car${location.occupied.id}.png`}
                alt="Car img"
                width={80}
                height={80}
              />
            </Box>
          ) : (
            <Box
              sx={{
                paddingInline: 1,
                bgcolor: "#5635f2",
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
          )}
        </Box>
      )}
    >
      <Box
        position="absolute"
        top={LocToPos(location.Ypos)}
        left={LocToPos(location.Xpos)}
        onClick={() => onLocSelect(location)}
        sx={{
          padding: 1,
          borderRadius: 2,
          height: buttonSize + heightOffset,
          width: buttonSize + widthOffset,
          bgcolor: location.occupied ? "#fc9c98" : undefined,
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
