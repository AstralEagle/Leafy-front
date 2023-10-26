import { Box, Stack } from "@mui/material";
import HangarFullBackground from "../../../assets/images/hangarFull.svg";
import * as React from "react";
import Stepper from "./Stepper";
import Card from "../../../components/container/Card";
import OrderSummary from "./OrderSummary";
import { COLORS } from "../../../style/colors";

const IncreaseStorage = () => {
  return (
    <Box
      sx={{
        background: `url(${HangarFullBackground}) center`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        padding: "2rem 4rem",
      }}
    >
      <Box
        sx={{
          background: "#FBF9F9",
          backgroundSize: "cover",
          position: "absolute",
          top: 0,
          height: "100%",
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
        }}
      />
      <Box sx={{ padding: "2rem" }}>
        <Box
          component="h1"
          sx={{
            color: COLORS.deepBlue,
            fontSize: "26px",
            fontWeight: 500,
            pb: "2rem",
          }}
        >
          Increase your storage space to keep your data safe.
        </Box>
        <Stack direction="row" justifyContent={"space-between"}>
          <Stack
            width={{
              xs: "100%",
              md: "50%",
              lg: "60%",
            }}
          >
            <Stepper />
          </Stack>
          <Box sx={{ position: "sticky" }}>
            <Card content={<OrderSummary />} />
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default IncreaseStorage;
