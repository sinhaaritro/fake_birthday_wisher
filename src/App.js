import React from "react";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import { Container, Box } from "@material-ui/core";
import CardContainer from "./Components/CardContainer";
import { deepPurple } from "@material-ui/core/colors";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                minHeight="100vh"
                style={{ backgroundColor: deepPurple[50] }}
            >
                <Container>
                    <CardContainer />
                </Container>
            </Box>
        </ThemeProvider>
    );
}

export default App;
