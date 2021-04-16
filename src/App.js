import React from "react";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import { Container, Box } from "@material-ui/core";
import CardContainer from "./Components/CardContainer";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                minHeight="100vh"
                style={{ backgroundColor: "#cfe8fc" }}
            >
                <Container>
                    <CardContainer />
                </Container>
            </Box>
        </ThemeProvider>
    );
}

export default App;
