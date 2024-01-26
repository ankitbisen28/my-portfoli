import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

export const NavDrawer = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          <ListItemButton>
            <ListItemIcon>
              <Link style={{ textDecoration: "none", color: "#212121" }} to="/">
                Home
              </Link>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <Link
                style={{ textDecoration: "none", color: "#212121" }}
                to="/about"
              >
                About
              </Link>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <Link
                style={{ textDecoration: "none", color: "#212121" }}
                to="/contact"
              >
                Contact
              </Link>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <Link
                style={{ textDecoration: "none", color: "#212121" }}
                to="/article"
              >
                Article
              </Link>
            </ListItemIcon>
          </ListItemButton>
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "black", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="black" />
      </IconButton>
    </>
  );
};
