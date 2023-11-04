import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/Home/LoginPage";
import NotFound from "../pages/Error/NotFound";
import SignupPage from "../pages/Home/SignupPage";
import IncreaseStorage from "../pages/User/IncreaseStorage/IncreaseStorage";
import Settings from "../pages/User/Settings/Settings";
import { isTokenValid } from "../Config/Auth";
import DashboardPage from "../pages/Home/DashboardPage";

const Root = () => {
  const isUserConnected = isTokenValid();
  // TODO : faire une page de déconnexion.

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isUserConnected ? <DashboardPage /> : <LoginPage />} />
        <Route path="/login" element={isUserConnected ? <DashboardPage /> : <LoginPage />} />
        <Route path="/signup" element={isUserConnected ? <DashboardPage /> : <SignupPage />} />

        {isUserConnected && (
          <>
            <Route path="/payment" element={<IncreaseStorage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/logout" element={<LoginPage />} />
          </>
        )}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;