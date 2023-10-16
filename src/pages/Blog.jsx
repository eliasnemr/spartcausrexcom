import React from "react";
import blogs from "../blogs";

import Image1 from "../blogs/assets/codefever.jpg";

const Blog = () => {
  return (
    <div>
      <p className="text-black mb-2">
        Here is a list of blogs I wrote about Minima and Crypto
      </p>
      <ul className="bg-slate-200 rounded-lg p-4 text-black flex flex-col gap-4">
        <h1 className="font-semibold mb-2">Latest blogs</h1>

        {blogs.map((b) => (
          <li className="bg-white grid grid-cols-[128px_1fr] gap-2 items-center rounded-lg hover:bg-slate-100 hover:cursor-pointer">
            <img src={`${b.url}`} className="rounded-l-lg" />
            <div className="overflow-hidden mr-4">
              <h6 className="text-sm font-bold">{b.title}</h6>
              <p className="text-sm truncate">{b.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
