import React from "react";
const Blog = ({ children, title, url }) => {
  return (
    <div className="text-black">
      <h1 className="font-bold mb-2 text-center">{title}</h1>
      <img src={url} />

      {children}
    </div>
  );
};

export default Blog;
