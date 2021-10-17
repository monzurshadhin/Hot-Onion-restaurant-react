import React from "react";
import { Container } from "react-bootstrap";
import useFoods from "../../../hooks/useFoods";
import "./Banner.css";

const Banner = (props) => {
  // const {handleSearch} = useFoods();
  const {handleSearch} = props;
  return (
    <div className="banner" id="home">
      <Container>
        <h1 className="header-title">Best food is waiting for You</h1>
        <div className="mb-3 d-flex justify-content-center">
          <input
          onChange={handleSearch}
            type="text"
            className="search-input"
            placeholder="Search Food items"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button
            className="search-button"
            type="button"
            id="button-addon2"
          >
            Search
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
