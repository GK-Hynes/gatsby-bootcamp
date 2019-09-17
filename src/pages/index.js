import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hi, I'm Gerard</h1>
      <h2>I'm a self-taught web developer</h2>
      <p>
        <Link to="/contact">Get in touch</Link>
      </p>
    </Layout>
  );
};

export default IndexPage;
