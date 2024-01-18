import React from "react";
import "./Portfolio.css";
import { product } from "./data";
import { Typography } from "@mui/material";

export const Portfolio = () => {
  return (
    <>
      <div id="portfolio" className="container">
        <div className="position-relative d-flex align-items-center justify-content-center">
          <Typography
            letterSpacing={4}
            variant="h2"
            color="primary"
            fontWeight={500}
            mt={4}
          >
            My Portfolio
          </Typography>
        </div>
        <div className="p-list">
          {product.map((item) => {
            return (
              <div className="p" key={item.id}>
                <div className="p-browser">
                  <div className="p-circle"></div>
                  <div className="p-circle"></div>
                  <div className="p-circle"></div>
                </div>
                <a href={item.link} target="_blank" rel="noreferrer">
                  <img src={item.img} className="p-img" alt="" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
