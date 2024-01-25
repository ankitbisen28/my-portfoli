import { Box, Typography, Link } from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";

export const Footer = () => {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        textAlign="center"
        marginTop={5}
        padding={5}
        width={{ lg: "100%" }}
        sx={{ backgroundColor: "#3D3B40" }}
      >
        <Box paddingBottom={2}>
          <Link padding={1}
            href="https://github.com/ankitbisen28"
            rel="noreferrer"
            target="_blank"
          >
            <GitHubIcon color="secondary" />
          </Link>
          <Link padding={1}
            href="https://linkedin.com/in/ankitbisen28"
            rel="noreferrer"
            target="_blank"
          >
            <LinkedInIcon color="secondary" />
          </Link>
          <Link padding={1}
            href="https://instagram.com/ankybisen"
            rel="noreferrer"
            target="_blank"
          >
            <InstagramIcon color="secondary" />
          </Link>
          <Link padding={1}
            href="https://twitter.com/ankitbisen28"
            rel="noreferrer"
            target="_blank"
          >
            <XIcon color="secondary" />
          </Link>
        </Box>

        <Typography
          textAlign="center"
          color="secondary"
          variant="body1"
          fontWeight={400}
        >
          {" "}
          © 2024 Ankit Bisen. All rights reserved{" "}
        </Typography>
      </Box>
    </>
  );
};
