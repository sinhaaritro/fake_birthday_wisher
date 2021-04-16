import React from "react";
import PropTypes from "prop-types";
import { Typography, Button, Box } from "@material-ui/core";

const FullWidthButton = ({ color, callbackFunc, children }) => {
    return (
        <>
            <Box my={2}>
                <Button
                    fullWidth
                    variant="contained"
                    color={color}
                    onClick={() => callbackFunc()}
                >
                    <Typography variant="button">{children}</Typography>
                </Button>
            </Box>
        </>
    );
};

FullWidthButton.propTypes = {
    color: PropTypes.string,
    children: PropTypes.node,
    callbackFunc: PropTypes.func,
};

export default FullWidthButton;
