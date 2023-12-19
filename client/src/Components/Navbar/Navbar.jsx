import React from "react";
import "./Navbar.css";
import {
  Toolbar,
  Typography,
  Box,
  Button,
  useScrollTrigger,
  Slide,
  AppBar,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

const navItems = ["Home", "About", "Contact"];

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
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                style={{ letterSpacing: "4px", fontWeight: "700" }}
              >
                {item}
              </Button>
            ))}
          </Box>
          <Box>
            <Typography fontWeight={700}>Link</Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default Navbar;
