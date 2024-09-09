import React from "react";
import "./Blog.css";
import img1 from "../../Assets/blog-1.jpeg";
import img2 from "../../Assets/blog-2.jpeg";
import img3 from "../../Assets/blog-3.jpeg";
import img4 from "../../Assets/blog-4.jpeg";
import img5 from "../../Assets/blog-5.jpeg";
import img6 from "../../Assets/blog-6.jpeg";
import img7 from "../../Assets/blog-7.jpeg";
import img8 from "../../Assets/blog-8.jpeg";
import BlogBox from "./BlogBox/BlogBox";

const Blog = () => {
  return (
    <div className="blog">
      <h1 className="section-title">Recent Blogs</h1>
      <p className="section-subtitle">Read Our News & articles about updates</p>

      <hr />
      <div className="blogBottomSection">
        <BlogBox img={img1} title="Best Comfortable Clothes Ideas" />
        <BlogBox img={img2} title="Casual Denim Clothing For Women" />
        <BlogBox img={img3} title="Best Poses For Fashion Photo" />
        <BlogBox img={img4} title="Best Poses For Fashion Photo" />
        <BlogBox img={img5} title="Casual Denim Clothing For Women" />
        <BlogBox img={img6} title="Best Comfortable Clothes Ideas" />
        <BlogBox img={img7} title="Casual Denim Clothing For Women" />
        <BlogBox img={img8} title="Best Poses For Fashion Photo" />
      </div>

      <button className="read-btn">READ ALL</button>
    </div>
  );
};

export default Blog;
