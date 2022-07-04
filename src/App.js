import { Button, Container } from "@mui/material";
import React, { useEffect } from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme, { Colors } from "./styles/themes/theme";
import Tracker from "./pages/tracker";
import { Utilities } from "./pages/utilities";
import { Box } from "@mui/system";

function App() {
  useEffect(() => {
    document.title = "valorant tracker home";
  }, []);

  return (
    <Box>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Tracker />} />
            <Route path="/tracker" element={<Tracker />} />
            <Route path="/utilities" element={<Utilities />} />
            <Route path="*" element={<p>NOT FOUND</p>} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Box>
  );
}

export default App;
