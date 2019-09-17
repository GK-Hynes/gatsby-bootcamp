import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

const ContactPage = () => {
  return (
    <div>
      <Header />
      <h1>Get in Touch</h1>
      <p>
        Find me on
        <a
          href="https://twitter.com/Gerard_K_Hynes"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
      </p>
      <Footer />
    </div>
  );
};

export default ContactPage;
