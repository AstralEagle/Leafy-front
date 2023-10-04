import React from "react";
import * as COLORS from "../../style/colors";
import { Typography } from "@mui/material";

const SignupTitle = () => (
  <Typography
    component="h2"
    sx={{
      "span": {
        fontSize: "40px",
        fontWeight: 600,
      }
    }}
  >
    <Typography component="span" sx={{ color: COLORS.deepBlue}}>Create an account</Typography>
  </Typography>
);

export default SignupTitle;
