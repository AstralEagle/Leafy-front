import * as React from "react";
import { OutlinedInput, InputAdornment, SvgIconTypeMap, OutlinedInputProps } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import * as COLORS from "../../style/colors";

interface InputProps extends OutlinedInputProps {
  StartIcon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  customColor?: string;
}

export const InputWithIcon = ({StartIcon, customColor = COLORS.lightGrey, ...rest}: InputProps) => (
  <OutlinedInput
    startAdornment={
      <InputAdornment position="start">
        <StartIcon sx={{ fill: customColor }}/>
      </InputAdornment>
    }
    sx={{
      background: "#FFF",
      borderRadius: "10px",
      color: customColor,
      boxShadow: "rgba(0, 0, 0, 0.04) 0px 3px 5px;",
      ".MuiOutlinedInput-root": {
        border: "transparent",
      },
      ".MuiOutlinedInput-input": {
        borderLeft: "1px solid " + COLORS.lightestGrey,
        paddingLeft: 2,
      },
      ".Mui-focused": {
        border: 0
      }
    }}
    {...rest}
  />
)