import React from "react";
import HomeLayout from "../../layouts/HomeLayout";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <HomeLayout
      content={
        <>
          <h2>Oops!</h2>
          <p>Sorry, the page was not found.</p>
          <Button
            color="secondary"
            onClick={() => navigate(-1)}
          >
            Back to previous page
          </Button>
        </>
      }
    />
  );
}

export default NotFound;