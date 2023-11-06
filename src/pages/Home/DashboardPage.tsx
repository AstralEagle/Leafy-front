import {Avatar, Box} from "@mui/material";
import * as React from "react";
import {useEffect, useState} from "react";
import ListFiles from "../../components/main/ListFiles";
import {request} from "../../Config/request";
import {dataItem} from "../../components/main/ListItem";
import UserInfo from "../../components/main/UserInfo";

const DashboardPage = () => {
  const [listItems, setListItems] = useState<dataItem[]>([])

  useEffect(
      () => {
        (async () => {
          const data = await request("file", "get", undefined)
          setListItems(data)
        })()
      }, []
  )

  return <Box sx={{height: "100vh", width: "100vw", display: "flex", flexDirection: "column", backgroundColor: "#FBFBFB", overflow: "hidden" }}>
    <Box sx={{width: "100vw", height: "60px", backgroundColor: "white", boxShadow: "0 4px 4px #0000000A", zIndex: 3}}>
      //nav
    </Box>
    <Box sx={{flex: 1, display: "flex", overflow: "hidden"}}>
      <ListFiles data={listItems}/>
      <Box sx={{width: "400px", backgroundColor: "white"}}>
        <UserInfo/>
      </Box>
    </Box>
  </Box>;
};

export default DashboardPage;
