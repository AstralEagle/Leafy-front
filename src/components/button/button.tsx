import * as React from "react";
import * as COLORS from "../../style/colors";
import { Button, ButtonProps } from "@mui/material";

interface BasicButtonProps extends ButtonProps {
    customColor?: string;
    textColor?: string;
}

export const BasicButton = ({customColor = COLORS.blue["500"], textColor = "#FFF", ...rest}: BasicButtonProps) => (
    <Button
        sx={{
            background: customColor,
            color: textColor,
            textTransform: "unset",
            height: "47px",
            width: "210px",
            maxWidth: "100%",
            padding: "9px 12px 8px 12px",
            borderRadius: "10px",
            fontSize: "20px",
            fontWeight: 600
        }}
        {...rest}
    />
)