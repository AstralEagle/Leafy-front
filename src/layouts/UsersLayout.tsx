import { Box } from "@mui/material";
import * as React from "react";
import { useEffect, useState } from "react";
import { dataItem } from "../components/main/ListItem";
import { request } from "../Config/request";
import ListFiles from "../components/main/ListFiles";


const UsersLayout = () => {
  const [listItems, setListItems] = useState<dataItem[]>([])

  useEffect(
      () => {
        (async () => {
          const data = await request("file", "get", undefined)
          setListItems(data)
        })()
      }, []
  )

  return <Box sx={{height: "100vh", width: "100vw", display: "flex", flexDirection: "column", backgroundColor: "#05162F" }}>
  
    <Box sx={{flex: 1, display: "flex", width: "max"}}>
      <ListFiles data={listItems} />
     
    </Box>
  </Box>;
};

export default UsersLayout;
