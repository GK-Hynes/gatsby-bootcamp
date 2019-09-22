import React from "react";
import { Link } from "gatsby";
import Head from "../components/head";
import Layout from "../components/layout";

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About Me</h1>
      <p>
        When I worked as a teacher, I used apps to make my work more efficient.
      </p>
      <p>Now I build them myself.</p>
      <Link to="/contact">Get in touch</Link>
    </Layout>
  );
};

export default AboutPage;
