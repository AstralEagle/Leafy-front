import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import * as React from "react";
import { useEffect, useState } from "react";
import ListFiles from "../../components/main/ListFiles";
import { request } from "../../Config/request";
import { dataItem } from "../../components/main/ListItem";
import UserInfo from "../../components/main/UserInfo";
import { Settings } from "@mui/icons-material";
import Honee from "../../assets/images/honee.png";
import { Link, useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const navigate = useNavigate();

  const [listItems, setListItems] = useState<dataItem[]>([]);

  useEffect(() => {
    (async () => {
      const data = await request("file", "get", undefined);
      setListItems(data);
    })();
  }, []);

  return (
    <Box sx={{ height: "100vh", width: "100vw", display: "flex", flexDirection: "column", backgroundColor: "#FBFBFB" }}>
      <Stack
        direction="row"
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{
          width: "100vw",
          height: "60px",
          backgroundColor: "white",
          boxShadow: "0 4px 4px #0000000A",
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          zIndex: 100000,
        }}
      >
        <Box sx={{ px: 4 }}>
          <Link to="/">
            <img src={Honee} />
          </Link>
        </Box>
        <TextField type="search" placeholder="search" variant="standard" />
        <Box>
          <IconButton onClick={() => navigate("/settings")}>
            <Button>
              <Settings />
            </Button>
          </IconButton>
        </Box>
      </Stack>
      <Box sx={{ flex: 1, display: "flex", overflow: "hidden", mt: "60px" }}>
        <ListFiles data={listItems} />
        <Box sx={{ width: "400px", backgroundColor: "white" }}>
          <UserInfo />
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardPage;
