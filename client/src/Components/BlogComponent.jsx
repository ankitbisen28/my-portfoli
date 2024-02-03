import { Box, Link, Typography, styled, Button } from "@mui/material";
import moment from "moment";
import React from "react";
import { useNavigate } from "react-router-dom";

const ButtonStyled = styled(Button)({
  width: "50%",
  margin: "10px",
  color: "#fff",
  backgroundColor: "#212121",
  borderRadius: "30px",
  "&:hover": {
    backgroundColor: "#fff",
    color: "gray",
  },
});

export const BlogComponent = ({ blogData }) => {
  const navigate = useNavigate();

  const handleOnClick = (id) => {
    navigate(`/article/${id}`);
  };

  return (
    <>
      {blogData.map((item) => {
        console.log(item);
        return (
          <Box
            sx={{  borderRadius: "15px"}}
            margin={3}
            alignItems={{ md: "center", lg: "center" }}
            width={{ xs: "80%", sm: "35%", md: "25%", lg: "25%" }}
            height={{ lg: "50vh" }}
            key={item._id}
          >
            <Box
              component="img"
              width="100%"
              height={{ xs: 250, sm: 180, md: 190, lg: 230 }}
              sx={{ objectFit: {xs:"cover"}, borderRadius: "15px" }}
              src={item.imageUrl}
              alt="ankit bisen"
            />
            <Typography
              padding={1}
              color="primary"
              style={{ fontSize: "10" }}
              fontWeight={700}
            >
              {item.title.length > 40
                ? `${item.title.substring(0, 40)}...`
                : item.title}
            </Typography>
            <Typography
              padding={1}
              color="primary"
              variant="body2"
              fontWeight={300}
            >
              {item.description.length > 60
                ? `${item.description.substring(0, 60)}...`
                : item.description}
            </Typography>
            <Box display="flex" flexDirection="row" alignItems="center">
              <ButtonStyled onClick={() => handleOnClick(item._id)}>
                Read more
              </ButtonStyled>
              <Typography>
                {moment
                  .parseZone(item.creationDate).startOf('minute').fromNow()}
              </Typography>
            </Box>
          </Box>
        );
      })}
    </>
  );
};
