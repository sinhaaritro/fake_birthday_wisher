import React from "react";
import { Container, Box } from "@material-ui/core";
import CardContainer from "./Components/CardContainer";
import { deepPurple } from "@material-ui/core/colors";

function App() {
    return (
        <>
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                minHeight="100vh"
                style={{ backgroundColor: deepPurple[50] }}
            >
                <Container fixed maxWidth="sm">
                    <CardContainer />
                </Container>
            </Box>
        </>
    );
}

export default App;
