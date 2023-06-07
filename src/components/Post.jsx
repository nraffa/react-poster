import React, { useState, useEffect } from "react";
import classes from "./Post.module.css";
import { Link } from "react-router-dom";
//import icon from react icon library
import { FaWindowClose } from "react-icons/fa";

function Post({ postId, author, body, onDelete }) {
  const handleDelete = () => {
    onDelete(postId);
  };

  return (
    <li className={classes.post}>
      <FaWindowClose className={classes.closeIcon} onClick={handleDelete} />
      <Link to={postId}>
        <p className={classes.author}>{author}</p>
        <p className={classes.text}>{body}</p>
      </Link>
    </li>
  );
}

export default Post;
