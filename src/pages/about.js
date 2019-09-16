import React from "react";
import { Link } from "gatsby";

const AboutPage = () => {
  return (
    <div>
      <h1>About Me</h1>
      <p>
        When I worked as a teacher, I used apps to make my work more efficient.
      </p>
      <p>Now I build them myself.</p>
      <Link to="/contact">Get in touch</Link>
    </div>
  );
};

export default AboutPage;
