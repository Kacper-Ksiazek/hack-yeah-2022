// Tools
import { styled } from "@mui/system";
// Types
import type { FunctionComponent, ReactNode } from "react";
// Other components
import MaterialThemeProvider from "./providers/MaterialThemeProvider";
// Material UI Components
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
// Material UI Icons
import LunchDining from "@mui/icons-material/LunchDining";
// Styled Components
const Navigation = styled("div")(({ theme }) => ({
    background: theme.palette.background.paper,
    marginBottom: "20px",
    height: "70px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 20px",
    ".logo": {
        display: "flex",
        svg: {
            fontSize: "3rem",
            marginRight: "10px",
        },
        ".text": {
            h3: {
                fontSize: "2rem",
                margin: 0,
                lineHeight: "30px",
                fontWeight: 700,
                color: theme.palette.primary.main,
            },
            span: {
                fontWeight: 500,
            },
        },
    },
}));

const Layout: FunctionComponent<{ children: ReactNode }> = (props) => {
    return (
        <MaterialThemeProvider>
            <Navigation>
                <div className="logo">
                    <LunchDining className="contrast-text" />
                    <div className="text">
                        <Typography variant="h3">Do not waste</Typography>
                        <Typography variant="body2" className="contrast-text">
                            Sharing is noble
                        </Typography>
                    </div>
                </div>
            </Navigation>
            {/*  */}
            <Container component="main"> {props.children}</Container>
        </MaterialThemeProvider>
    );
};

export default Layout;
