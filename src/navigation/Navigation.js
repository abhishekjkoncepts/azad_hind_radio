import React from "react";

// React-Router-Dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

//MUI-Libraries
import { Box, Typography, Grid } from "@mui/material";
import Radiopage from "../pages/RadioPage/Radiopage";
import Radiopage2 from "../pages/RadioPage2/Radiopage2";

// Pages

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Radiopage />} />
        <Route path="/radiopage2/" element={<Radiopage2/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
