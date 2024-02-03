import React from "react";
import { Portfolio } from "../Components/Portfolio/Portfolio";
import { Container, Typography } from "@mui/material";
import { WorkExperience } from "../Components/WorkExperience";
import { EducationComponent } from "../Components/EducationComponent";
import { Technology } from "../Components/Technology";

export const About = () => {
  return (
    <>
      <Container>
        <Typography
          letterSpacing={4}
          variant="h3"
          color="primary"
          fontWeight={600}
          mt={13}
        >
          About Me
        </Typography>
        <Typography
          variant="body1"
          width={{ xs: "100%", md: "60%" }}
          marginTop={4}
          color="primary"
        >
          Welcome to the portfolio of Ankit Bisen, a self-taught developer with
          a passion for crafting dynamic and innovative digital solutions.
          Specializing in React and Node.js, Ankit possesses a versatile skill
          set that encompasses both SQL and NoSQL databases. With a track record
          of participation in multiple hackathons, Ankit thrives in fast-paced,
          collaborative environments, where creativity and problem-solving are
          paramount.
          <br />
          <br />
          As a freelancer, Ankit's expertise shines in the development of
          blog-related and ecommerce websites. With a keen understanding of
          client needs and industry trends, Ankit delivers tailored solutions
          that elevate online experiences. Drawing from previous experience with
          WordPress, Ankit adeptly navigates both custom development and
          WordPress platforms, ensuring versatility and efficiency in every
          project undertaken.
          <br />
          <br />
          Explore Ankit Bisen's portfolio to witness the fusion of
          technical prowess, creativity, and client-centric focus that defines
          his work. Whether it's building custom solutions or leveraging
          existing platforms, Ankit is committed to delivering excellence in
          every endeavor.
        </Typography>
        <Technology />
        <WorkExperience />
        <EducationComponent />
        <Portfolio />
      </Container>
    </>
  );
};
