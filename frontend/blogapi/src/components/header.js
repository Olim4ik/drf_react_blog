import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/AppBar";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import SearchBar from "material-ui-search-bar";


function Header() {
    let navigate = useNavigate();
    const [data, setData] = useState({search: ''})

    const goSearch = (e) => {
        navigate({
            pathname: '/search/',
            search: '?search=' + data.search,
        });
        window.location.reload();
    };

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
                        <SearchBar
                            value={data.search}
                            onChange={(newValue) => setData({ search: newValue })}
                            onRequestSearch={() => goSearch(data.search)}
                        />
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
