import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import {
  Route,
  RouterProvider,
  createHashRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Blogs from "./pages/Blogs.jsx";
import Downloads from "./pages/Downloads.jsx";
import RunANode from "./pages/RunANode.jsx";
import ALoveStory from "./Components/ALoveStory/index.jsx";

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="runanode" element={<RunANode />} />
      <Route path="downloads" element={<Downloads />} />
      <Route path="blog" element={<Blogs />} />
      <Route path="blog/alovestory" element={<ALoveStory />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
