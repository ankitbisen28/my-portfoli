import React from "react";
import { Portfolio } from "../Portfolio/Portfolio";
import { Container, Typography } from "@mui/material";
import { WorkExperience } from "../WorkExperience";
import { EducationComponent } from "../EducationComponent";
import { Technology } from "../Technology";

export const About = () => {
  return (
    <>
      <Container>
        <Typography
          letterSpacing={4}
          variant="h3"
          color="primary"
          fontWeight={600}
          mt={5}
        >
          About Me
        </Typography>
        <Typography variant="body1" width="60%" marginTop={4} color="primary">
          I am a Full Stack Developer, with a keen focus on Node.js and
          React.js. Passionate about crafting seamless and innovative web
          solutions, I bring a fresh perspective to the world of technology. My
          academic background, coupled with hands-on experience, has equipped me
          with the skills needed to navigate the dynamic realm of full-stack
          development. I am dedicated to leveraging my expertise to contribute
          to impactful and cutting-edge projects in the ever-evolving field of
          web development
        </Typography>
        <Technology />
        <WorkExperience />
        <EducationComponent />
        <Portfolio />
      </Container>
    </>
  );
};
