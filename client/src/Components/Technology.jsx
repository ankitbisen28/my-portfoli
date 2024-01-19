import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import { GrReactjs } from "react-icons/gr";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMui } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiRedux } from "react-icons/si";
import { IoLogoElectron } from "react-icons/io5";
import { SiMysql } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiSqlite } from "react-icons/si";
import { SiTypescript } from "react-icons/si";

export const Technology = () => {
  return (
    <>
      <Box>
        <Typography
          letterSpacing={4}
          variant="h3"
          color="primary"
          mt={5}
          fontWeight={600}
        >
          Technology
        </Typography>
        <Typography padding={2} variant="subtitle2" color="primary">
          Technologies I've been working with recently
        </Typography>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          width="100%"
          margin="auto"
          flexWrap="wrap"
          borderRadius="20px"
          padding={{xs:1, md:5}}
          backgroundColor="gray"
        >
          <FaHtml5 fontSize={100} color="orange" style={{ margin: "20px" }} />
          <FaCss3Alt
            fontSize={100}
            color="#FF8C00"
            style={{ margin: "20px" }}
          />
          <RiJavascriptFill
            fontSize={100}
            color="rgb(255, 255, 0)"
            style={{ margin: "20px" }}
          />
          <SiTypescript
            fontSize={80}
            color="#007acc"
            style={{ margin: "20px" }}
          />
          <SiMui fontSize={80} color="#3b82f680" style={{ margin: "20px" }} />
          <GrReactjs
            fontSize={100}
            color="rgb(0, 255, 255)"
            style={{ margin: "20px" }}
          />
          <SiRedux fontSize={100} color="#A020F0" style={{ margin: "20px" }} />
          <TbBrandNextjs
            fontSize={100}
            color="black"
            style={{ margin: "20px" }}
          />
          <IoLogoElectron
            fontSize={100}
            color="rgb(0, 255, 255)"
            style={{ margin: "20px" }}
          />
          <FaNodeJs fontSize={100} color="green" style={{ margin: "20px" }} />
          <SiExpress fontSize={100} color="black" style={{ margin: "20px" }} />
          <DiMongodb fontSize={100} color="green" style={{ margin: "20px" }} />
          <SiMysql fontSize={100} color="black" style={{ margin: "20px" }} />
          <BiLogoPostgresql
            fontSize={100}
            color="black"
            style={{ margin: "20px" }}
          />
          <SiSqlite fontSize={100} color="black" style={{ margin: "20px" }} />
        </Box>
      </Box>
    </>
  );
};
