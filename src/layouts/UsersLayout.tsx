import React, { useEffect, useState } from "react";
import SearchBar from "../components/search/search";
import { request } from "../Config/request";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom"; 

const UsersLayout = () => {
  const [data, setData] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");


  function filterData(searchQuery: string, data: string[]) {
    return data.filter((userName) =>
      userName.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  useEffect(() => {
    const fetchUserNames = async () => {
      try {
        const response = await request("admin/users", "get", undefined);

        if (Array.isArray(response)) {
          const userNames = response.map(
            (user) => `${user.firstName} ${user.lastName}`
          );
          setData(userNames);
        }
      } catch (error) {
        console.error("Error", error);
      }
    };
    fetchUserNames();
  }, []);

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
              <Link to={`/${d}`} key={d} style={{ textDecoration: "none" }}>
                <Paper
                  elevation={3}
                  style={{
                    padding: 5,
                    justifyContent: "normal",
                    fontSize: 20,
                    color: "white",
                    margin: 1,
                    width: "250px",
                    marginTop: "10px",
                    border: "0px solid transparent", 
                    backgroundColor: "#0E203A",
                  }}
                >
                  {d}
                </Paper>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersLayout;
