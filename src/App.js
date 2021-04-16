import React from "react";
import { Container, Box } from "@material-ui/core";
import CardContainer from "./Components/CardContainer";

function App() {
    return (
        <>
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                minHeight="100vh"
                style={{ backgroundColor: "#cfe8fc" }}
            >
                <Container fixed maxWidth="sm">
                    <CardContainer />
                </Container>
            </Box>
        </>
    );
}

export default App;
