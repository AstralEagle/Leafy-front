import * as React from "react";
import { OutlinedInput, OutlinedInputProps } from "@mui/material";
import * as COLORS from "../../style/colors";

interface BasicInputProps extends OutlinedInputProps {
  customColor?: string;
}

const BasicInput = ({customColor, ...rest}: BasicInputProps) => (
  <OutlinedInput
    sx={{
      background: "#FFF",
      borderRadius: "10px",
      color: customColor,
      width: "356px",
      maxWidth: "100%",
      boxShadow: "rgba(0, 0, 0, 0.04) 0px 3px 5px;",
      ".MuiOutlinedInput-root": {
        border: "transparent",
      },
      ".MuiOutlinedInput-input": {
        borderLeft: "1px solid " + COLORS.lightestGrey,
        paddingLeft: 2,
      },
      ".Mui-focused, .MuiOutlinedInput-notchedOutline": {
        border: 0
      }
    }}
    {...rest}
  />
)

export default BasicInput;