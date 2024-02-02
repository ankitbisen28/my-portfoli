import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button, Container, Typography, Box, TextField } from "@mui/material";
import Alert from "@mui/material/Alert";

const customTextField = {
  width: { xs: "90%", md: "60%" },
};

export const Contact = () => {
  const [done, setdone] = useState(false);
  const [data, setdata] = useState({
    user_name: "",
    user_email: "",
    user_subject: "",
    message: "",
  });
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      data.user_name === "" ||
      data.user_email === "" ||
      data.user_subject === "" ||
      data.message === ""
    ) {
      return <Alert severity="danger">Fill up all the fields</Alert>;
    }

    emailjs
      .sendForm(
        "service_tx8dcb6",
        "template_jtsn0ar",
        formRef.current,
        "0alO80Zq6XKb8tuop"
      )
      .then(
        (result) => {
          setdone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setTimeout(() => {
      setdone(false);
    }, 5000);

    clearForm();
  };

  const clearForm = () => {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");

    name.value = "";
    email.value = "";
    subject.value = "";
    message.value = "";
  };

  const handleInput = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Container sx={{ marginTop: 15 }}>
        <Typography
          variant="h3"
          color="primary"
          textAlign="center"
          mb={3}
          fontWeight={600}
        >
          Contact
        </Typography>

        {done && (
          <Container sx={{ width: { xs: "90", lg: "50%" }, marginBottom: 3 }}>
            <Alert severity="success">Form successfully submit</Alert>
          </Container>
        )}
        <Box
          display="flex"
          flexDirection="column"
          width="100%"
          alignItems="center"
          gap={3}
          component="form"
          ref={formRef}
          onSubmit={handleSubmit}
        >
          <TextField
            sx={customTextField}
            type="text"
            name="user_name"
            id="name"
            onChange={handleInput}
            label="Your Name"
          />
          <TextField
            sx={customTextField}
            type="email"
            name="user_email"
            id="email"
            onChange={handleInput}
            label="Your Email"
          />
          <TextField
            sx={customTextField}
            type="text"
            name="user_subject"
            id="subject"
            onChange={handleInput}
            label="Subject"
          />
          <TextField
            sx={customTextField}
            multiline
            maxRows={4}
            name="message"
            id="message"
            label="Message"
            onChange={handleInput}
          />
          <Button
            type="submit"
            sx={{
              color: "white",
              backgroundColor: "#212121",
              "&:hover": { color: "black", backgroundColor: "gray" },
            }}
          >
            Send Message
          </Button>
        </Box>
      </Container>
    </>
  );
};
