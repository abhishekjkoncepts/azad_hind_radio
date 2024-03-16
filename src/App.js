import React from "react";

// MUI
import { Box } from "@mui/material";

import Navigation from "./navigation/Navigation";
import Radiopage from "./pages/RadioPage/Radiopage";

const App = () => {
  return (
    <Box flex={1}>
      <Navigation />  
      {/* <Radiopage/> */}
    </Box>
  );
};

export default App;
