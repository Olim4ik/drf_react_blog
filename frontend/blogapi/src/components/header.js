import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/AppBar";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";


function Header() {
    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar
                position="static"
                color="default"
                elevation={0}
                sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
            >
                <Toolbar sx={{ flexWrap: "wrap" }}>
                    <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }} textAlign={"left"}>
                        <Link component={NavLink} to="/" underline="none" color="text.primary">
                            Company name
                        </Link>
                    </Typography>
                    <nav>
                        <Link variant="button" color="text.primary" href="#" component={NavLink} to="/register" sx={{ my: 1, mx: 1.5 }}>
                            Register
                        </Link>
                        {/* <Link variant="button" color="text.primary" href="#" sx={{ my: 1, mx: 1.5 }}>
                            Logout
                        </Link> */}
                    </nav>
                    <Button href="login" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                        Login
                    </Button>
                    <Button href="logout" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                        Logout
                    </Button>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}

export default Header;
