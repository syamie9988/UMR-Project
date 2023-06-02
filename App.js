import React from 'react';
import Login from './pages/login/Login';
import { Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import Masterlist from "./pages/mainpage/Operations/Masterlist";
import General from "./pages/mainpage/Accounts/Attendance/General";
import Normal_Rest_Day from "./pages/mainpage/Accounts/Attendance/Normal_Rest_Day";
import Daily from "./pages/mainpage/Accounts/Attendance/daily";
import Public_Lateness from "./pages/mainpage/Accounts/Attendance/Public_Lateness";
import Additional from "./pages/mainpage/Accounts/Attendance/Additional";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./components/theme";
import Customer_Bill from "./pages/mainpage/Accounts/Billing/Customer_Bill";
import Rest_Day from "./pages/mainpage/Accounts/Billing/Rest_Day";
import Late_Leave from "./pages/mainpage/Accounts/Billing/Late_Leave";
import Addition from "./pages/mainpage/Accounts/Billing/Addition";
import Deduction from "./pages/mainpage/Accounts/Billing/Deduction";

function App() {

  const [isSidebar, setIsSidebar] = useState(true);

  const [theme, colorMode] = useMode();
  


  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <div className="login">
          <main className="content">

            <Routes>
            <Route path="/" element={<Login />} />
            </Routes>
          </main>
        </div>

        <div className="app">
          
          <Sidebar isSidebar={isSidebar} />
            <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
              <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/Masterlist" element={<Masterlist />}  />
                <Route path="/General" element={<General />} />
                <Route path="/Normal_Rest_Day" element={<Normal_Rest_Day />} />
                <Route path="/daily" element={<Daily />} />
                <Route path="/Public_Lateness" element={<Public_Lateness />} />
                <Route path="/Additional" element={<Additional />} />
                <Route path="/Customer_Bill" element={<Customer_Bill />} />
                  <Route path="/Rest_Day" element={<Rest_Day />} />
                  <Route path="/Late_Leave" element={<Late_Leave />} />
                  <Route path="/Addition" element={<Addition />} />
                  <Route path="/Deduction" element={<Deduction />} />
              </Routes>
            </main>
          </div>

      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
