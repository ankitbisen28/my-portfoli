import { Typography, styled, alpha, InputBase, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

const SearchContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  marginLeft: "5rem",
  width: "50%",
  backgroundColor:"gray",
  borderRadius:"20px"
});

const SearchInput = styled(InputBase)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  flex: 1,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(1),
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const SearchComponent = () => {
  return (
    <>
      <SearchContainer>
        <SearchInput
          placeholder="Search..."
          inputProps={{ "aria-label": "search" }}
        />
        <SearchIconWrapper>
          <Button>
            <SearchIcon sx={{ cursor: "pointer" }} />
          </Button>
        </SearchIconWrapper>
      </SearchContainer>
    </>
  );
};
