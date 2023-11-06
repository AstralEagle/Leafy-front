import React, { useEffect, useState } from "react";
import SearchBar from "../components/search/search";
import { request } from "../Config/request";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import UserFiles from "../components/main/UserFiles";


const UsersLayout = () => {
  const [data, setData] = useState<Array<{ fullName: string; uid: string }>>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUid, setSelectedUid] = useState<string | null>(null); 

  function filterData(
    searchQuery: string,
    data: Array<{ fullName: string; uid: string }>
  ) {
    return data.filter((user) =>
      user.fullName &&
      user.fullName.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  const handleUserClick = (uid: string) => {
   
    setSelectedUid(uid); 
  };

  useEffect(() => {
    const fetchUserNames = async () => {
      try {
        const response = await request("admin/users", "get", undefined);

        if (Array.isArray(response)) {
          const users = response.map((user) => ({
            fullName: `${user.firstName} ${user.lastName}`,
            uid: user.uid,
          }));
          setData(users);
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
      {
        !!selectedUid &&<UserFiles uid={selectedUid!} />
      }
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
            {dataFiltered?.map((user) => (
              <div key={user.uid}>
                <div
                  style={{ textDecoration: "none" }}
                  onClick={() => handleUserClick(user.uid)} 
                >
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
                    {user.fullName}
                  </Paper>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
     

    </div>
  );
};

export default UsersLayout;
