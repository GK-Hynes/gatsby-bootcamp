import React from "react";
import { Link } from "gatsby";
import Header from "../components/header";
import Footer from "../components/footer";

const IndexPage = () => {
  return (
    <div>
      <Header />
      <h1>Hi, I'm Gerard</h1>
      <h2>I'm a self-taught web developer</h2>
      <p>
        <Link to="/about">About me</Link>
      </p>
      <p>
        <Link to="/contact">Get in touch</Link>
      </p>
      <Footer />
    </div>
  );
};

export default IndexPage;
