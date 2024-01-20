import React from "react";
import { Toolbar, Box, AppBar, useTheme, useMediaQuery } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { NavDrawer } from "./NavDrawer";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";

const navItems = ["About", "Contact", "Article"];

export const Navbar = (props) => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar>
      <Toolbar
        style={{
          backgroundColor: "#fff",
          color: "#212121",
          display: "flex",
          aligntItem: "center",
          justifyContent: "space-around",
          letterSpacing: "3px",
        }}
      >
        <Box display="flex" flexDirection="row">
          <PersonIcon
            sx={{ fontSize: 40, marginRight: "5px" }}
            fontWeight={700}
          />
          <Link
            style={{
              letterSpacing: "4px",
              fontWeight: "600",
              textDecoration: "none",
              padding: "10px",
              color: "#212121",
              fontSize: "1.2rem",
            }}
            to="/"
          >
            Ankit
          </Link>
        </Box>
        {isMatch ? (
          <Box marginLeft="auto">
            <NavDrawer />
          </Box>
        ) : (
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Link
              style={{
                letterSpacing: "4px",
                fontWeight: "600",
                textDecoration: "none",
                padding: "10px",
                color: "#212121",
              }}
              to="/"
            >
              Home
            </Link>
            {navItems.map((item) => (
              <Link
                key={item}
                style={{
                  letterSpacing: "4px",
                  fontWeight: "600",
                  textDecoration: "none",
                  padding: "10px",
                  color: "#212121",
                }}
                to={`/${item.toLowerCase()}`}
              >
                {item}
              </Link>
            ))}
          </Box>
        )}

        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Link
            to="https://github.com/ankitbisen28"
            target="_blank"
            style={{
              color: "#212121",
            }}
          >
            <GitHubIcon />
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
