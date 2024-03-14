import React from "react";

// React-Router-Dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

//MUI-Libraries
import { Box, Typography, Grid } from "@mui/material";

// Pages
import Home from "../pages/Home/Home";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
