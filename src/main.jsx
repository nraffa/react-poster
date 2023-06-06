import React from "react";
import ReactDOM from "react-dom/client";
import Posts, { loader as postsLoader } from "./routes/Posts.jsx";
import "./index.css";
import RootLayout from "./routes/RootLayout.jsx";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NewPost, { action as addNewPostAction } from "./routes/NewPost.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        loader: postsLoader,
        children: [
          {
            path: "/create-post",
            element: <NewPost />,
            action: addNewPostAction,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
