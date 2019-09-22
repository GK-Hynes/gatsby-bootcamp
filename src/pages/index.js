import React from "react";
import { Link } from "gatsby";
import Head from "../components/head";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hi, I'm Gerard</h1>
      <h2>I'm a self-taught web developer</h2>
      <p>
        <Link to="/contact">Get in touch</Link>
      </p>
    </Layout>
  );
};

export default IndexPage;
