import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { COLORS } from "../style/colors";
import HangarAsset from "../assets/images/hangar.svg";
import DenseTable from "../components/densetable/densetable";

interface HomepageProps {
  content: JSX.Element;
}

const UsersLayout = () => {

  return (
  <>  <div className="layout-container">
    
    
  <div className="page-container">
  <DenseTable />
    </div>
    </div>
  </>
  )
}

export default UsersLayout;