import React from "react";
import { Link } from "gatsby";

const IndexPage = () => {
  return (
    <div>
      <h1>Hi, I'm Gerard</h1>
      <h2>I'm a self-taught web developer</h2>
      <p>
        <Link to="/about">About me</Link>
      </p>
      <p>
        <Link to="/contact">Get in touch</Link>
      </p>
    </div>
  );
};

export default IndexPage;
