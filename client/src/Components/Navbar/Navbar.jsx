import React from "react";
import {
  Toolbar,
  Typography,
  Box,
  Button,
  useScrollTrigger,
  Slide,
  AppBar,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { NavDrawer } from "../NavDrawer/NavDrawer";
import { Link } from "react-router-dom";

const navItems = ["Home", "About", "Contact", "Blogs"];

const HideOnScroll = (props) => {
  const { children, target } = props;
  const trigger = useScrollTrigger({
    target: target ? target() : undefined,
    disableHysteresis: true,
    threshold: 100, // Adjust this value to set when the navbar should appear
  });

  return (
    <Slide appear={false} direction="down" in={trigger}>
      {children}
    </Slide>
  );
};

export const Navbar = (props) => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <HideOnScroll {...props}>
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
              sx={{ fontSize: 40, marginRight: "10px" }}
              fontWeight={700}
            />
            <Typography fontSize={20} marginTop={1} fontWeight={700}>
              Ankit
            </Typography>
          </Box>
          {isMatch ? (
            <Box marginLeft="auto">
              <NavDrawer />
            </Box>
          ) : (
            <Box sx={{ display: { xs: "none", md: "block" } }}>
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
              to="/about"
              style={{
                textDecoration: "none",
                color: "#212121",
                fontWeight: "600",
                letterSpacing: "4px",
              }}
            >
              Link
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default Navbar;
