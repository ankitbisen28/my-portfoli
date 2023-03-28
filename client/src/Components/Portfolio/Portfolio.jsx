import React from "react";
import "./Portfolio.css";
import { product } from "./data";

export const Portfolio = () => {
  return (
    <>
      <div id="portfolio" className="container">
        <div className="position-relative d-flex align-items-center justify-content-center">
          <h1
            className="display-1 text-uppercase text-white"
            style={{"WebkitTextStroke": "1px #dee2e6"}}
          >
            Gallery
          </h1>
          <h1 className="position-absolute text-uppercase text-primary">
            My Portfolio
          </h1>
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
