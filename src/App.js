import React from "react";

// MUI
import { Box } from "@mui/material";

import Navigation from "./navigation/Navigation";
import Example from "./pages/Home/Example";

const App = () => {
  return (
    <Box flex={1}>
      <Navigation />  
    </Box>
  );
};

export default App;
