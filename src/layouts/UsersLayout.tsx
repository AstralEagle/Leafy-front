import { Box } from "@mui/material";
import * as React from "react";
import { useEffect, useState } from "react";
import { dataItem } from "../components/main/ListItem";
import { request } from "../Config/request";
import ListFiles from "../components/main/ListFiles";


import SearchBar from "../components/search/search";

const data = [
  "Paris",
  "London",
  "New York",
  "Tokyo",
  "Berlin",
  "Buenos Aires",
  "Cairo",
  "Canberra",
  "Rio de Janeiro",
  "Dublin",
];

const filterData = (query: string, data: any[]) => {
  if (!query) {
    return data;
  } else {
    return data.filter((d) => d.toLowerCase().includes(query.toLowerCase()));
  }
};


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



  const [searchQuery, setSearchQuery] = useState("");
  const dataFiltered = filterData(searchQuery, data);

  return (
    <div className="layout-container">
    
    
    <div className="page-container">
    <div
      style={{
        display: "flex",
        alignSelf: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: 20,
      }}
    >
      <SearchBar setSearchQuery={setSearchQuery} />
      <div style={{ padding: 3 }}>
        {dataFiltered.map((d) => (
          <div
            className="text"
            style={{
              padding: 5,
              justifyContent: "normal",
              fontSize: 20,
              color: "blue",
              margin: 1,
              width: "250px",
              borderColor: "green",
              borderWidth: "10px",
            }}
            key={d}
          >
            {d}
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>
  );




  // return<>
  // <Search/>
  
  // <Box sx={{height: "100vh", width: "100vw", display: "flex", flexDirection: "column", backgroundColor: "#05162F" }}>
  
  //   <Box sx={{flex: 1, display: "flex", width: "max"}}>
  //     <ListFiles data={listItems} />

  //   </Box>
  // </Box>;
  // </>
};

export default UsersLayout;
