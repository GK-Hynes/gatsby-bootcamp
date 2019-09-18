/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "JAMstack Developer",
    author: "Gerard Hynes",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "source",
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-transformer-remark",
  ],
};
