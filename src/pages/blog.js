import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import BlogStyles from "./blog.module.scss";

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "DD MMMM YYYY")
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <h1>My Blog</h1>
      <ol className={BlogStyles.posts}>
        {data.allContentfulBlogPost.edges.map(edge => {
          return (
            <li className={BlogStyles.post}>
              <Link to={`/blog/${edge.node.slug}`}>
                <h1>{edge.node.title}</h1>
                <p>{edge.node.publishedDate}</p>
              </Link>
            </li>
          );
        })}
      </ol>
    </Layout>
  );
};

export default BlogPage;
