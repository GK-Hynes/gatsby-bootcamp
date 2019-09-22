import React from "react";
import Head from "../components/head";
import Layout from "../components/layout";

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Get in Touch</h1>
      <p>
        Find me on{" "}
        <a
          href="https://twitter.com/Gerard_K_Hynes"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
      </p>
    </Layout>
  );
};

export default ContactPage;
