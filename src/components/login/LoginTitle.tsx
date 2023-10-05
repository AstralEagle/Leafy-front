import React from "react";
import { COLORS } from "../../style/colors";
import { Typography } from "@mui/material";

const LoginTitle = () => (
  <Typography
    component="h2"
    sx={{
      "span": {
        fontSize: "40px",
        fontWeight: 600,
      }
    }}
  >
    <Typography component="span" sx={{ color: COLORS.deepBlue}}>Welcome</Typography>
    {" "}
    <Typography component="span" sx={{ color: COLORS.yellow}}>back</Typography>
  </Typography>
);

export default LoginTitle;
