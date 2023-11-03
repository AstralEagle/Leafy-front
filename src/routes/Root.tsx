import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/Home/LoginPage";
import NotFound from "../pages/Error/NotFound";
import SignupPage from "../pages/Home/SignupPage";
import IncreaseStorage from "../pages/User/IncreaseStorage/IncreaseStorage";
import Profile from "../pages/User/Profile/Profile";
import { isTokenValid } from "../Config/Auth";
import DashboardPage from "../pages/Home/DashboardPage";

const Root = () => {
  const isUserConnected = isTokenValid();
  // TODO : faire une page de déconnexion.

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isUserConnected ? <DashboardPage /> : <LoginPage />} />

        {isUserConnected && (
          <>
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/payment" element={<IncreaseStorage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/logout" element={<LoginPage />} />
          </>
        )}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;