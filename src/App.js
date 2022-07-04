import { Button, Container } from "@mui/material";
import React, { useEffect } from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/themes/theme";
import Tracker from "./pages/tracker";
import { Utilities } from "./pages/utilities";

function App() {
  useEffect(() => {
    document.title = "valorant tracker home";
  }, []);

  return (
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
  );
}

export default App;
