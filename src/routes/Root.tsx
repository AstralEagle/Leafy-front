import * as React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from "../pages/Home/LoginPage";
import NotFound from "../pages/Error/NotFound";
import AdminPage from "../pages/Admin/AdminPage";

const Root = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route path='/admin' element={<AdminPage />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    </BrowserRouter>
)

export default Root;