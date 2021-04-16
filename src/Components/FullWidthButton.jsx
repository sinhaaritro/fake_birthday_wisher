import React from "react";
import PropTypes from "prop-types";
import { Button, Box } from "@material-ui/core";

const FullWidthButton = ({ color, callbackFunc, children }) => {
    return (
        <>
            <Box mt={2}>
                <Button fullWidth color={color} onClick={() => callbackFunc()}>
                    {children}
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
