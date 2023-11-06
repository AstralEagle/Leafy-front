import {Box} from "@mui/material";
import * as React from "react";
import {useEffect, useState} from "react";
import ListFiles from "../../components/main/ListFiles";
import {request} from "../../Config/request";
import {dataItem} from "../../components/main/ListItem";

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

  return <Box sx={{height: "100vh", width: "100vw", display: "flex", flexDirection: "column", backgroundColor: "#FBFBFB" }}>
    <Box sx={{width: "100vw", height: "60px", backgroundColor: "white", boxShadow: "0 4px 4px #0000000A", zIndex: 3 }}>
    //nav
    </Box>
    <Box sx={{flex: 1, display: "flex", width: "max"}}>
      <ListFiles data={listItems} />
      <Box sx={{width: "400px", backgroundColor:"white"}}></Box>
    </Box>
  </Box>;
};

export default DashboardPage;
