import React from "react";
import { Box } from "@mui/material";

interface CardProps {
  content: JSX.Element;
}

const Card = ({ content }: CardProps) => {
  return (
    <Box
      sx={{
        display: "inline-flex",
        padding: " 48px 48px 75px 33px",
        alignItems: "center",
        borderRadius: "10px",
        background: "#FFF",
      }}
    >
      {content}
    </Box>
  );
};

export default Card;
