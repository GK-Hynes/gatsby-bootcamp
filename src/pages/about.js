import React from "react";
import { Link } from "gatsby";
import Header from "../components/header";
import Footer from "../components/footer";

const AboutPage = () => {
  return (
    <div>
      <Header />
      <h1>About Me</h1>
      <p>
        When I worked as a teacher, I used apps to make my work more efficient.
      </p>
      <p>Now I build them myself.</p>
      <Link to="/contact">Get in touch</Link>
      <Footer />
    </div>
  );
};

export default AboutPage;
