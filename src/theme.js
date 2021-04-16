import { createMuiTheme } from "@material-ui/core";
import { deepPurple, amber } from "@material-ui/core/colors";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: deepPurple[500],
        },
        secondary: {
            main: amber[500],
        },
    },
    props: {
        MuiButton: {
            variant: "contained",
        },
        MuiContainer: {
            fixed: true,
            maxWidth: "sm",
        },
    },
});

export default theme;
