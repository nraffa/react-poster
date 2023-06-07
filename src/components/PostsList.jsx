import React, { useState, useEffect } from "react";
import Post from "./Post";
import classes from "./PostsList.module.css";
// import hook for the fetching of posts though routing loader
import { useLocation, useLoaderData } from "react-router-dom";
import axios from "axios";

function PostsList() {
  axios.defaults.baseURL = "http://localhost:8080/";

  const [posts, setPosts] = useState(useLoaderData());

  const handleDeletePost = (postId) => {
    axios
      .delete(`/posts/${postId}`)
      .then(() => {
        setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
        console.log("Delete successful");
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post
              key={post.id}
              postId={post.id}
              author={post.author}
              body={post.body}
              onDelete={handleDeletePost}
            />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet...</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
