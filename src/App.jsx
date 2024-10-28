import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Container, Grid2, Typography } from "@mui/material";
import "./App.css";
import Datatable from "./components/Datatable/Datatable.jsx";
import MoveTopButton from "./components/MoveTopButton/MoveTopButton.jsx";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./shared/theme";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={theme}>
          <Container
            maxWidth="full"
            sx={{
              minHeight: "100vh",
              pt: 10,
              px: { xs: 2, md: 3 },
            }}
          >
            <Typography variant="h3" align="center" gutterBottom>
              Disney Characters Dashboard
            </Typography>
            <Grid2 container spacing={4} justifyContent="center">
              {/* datatable here - this component contains the other functional components, passing the character data as a prop */}
              <Datatable />
              <MoveTopButton />
            </Grid2>
          </Container>
        </ThemeProvider>
      </Router>
    </Provider>
  );
}

export default App;
