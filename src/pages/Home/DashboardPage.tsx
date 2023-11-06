import { Box } from "@mui/material";
import * as React from "react";
import { useEffect, useState } from "react";
import ListFiles from "../../components/main/ListFiles";
import { request } from "../../Config/request";
import { dataItem } from "../../components/main/ListItem";
import Navbar from "../../components/Navbar";
import UserInfo from "../../components/main/UserInfo";

const DashboardPage = () => {
  const [listItems, setListItems] = useState<dataItem[]>([]);

  useEffect(() => {
    (async () => {
      const data = await request("file", "get", undefined);
      setListItems(data);
    })();
  }, []);

  return (
    <Box sx={{ height: "100vh", width: "100vw", display: "flex", flexDirection: "column", backgroundColor: "#FBFBFB" }}>
      <Navbar />
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
