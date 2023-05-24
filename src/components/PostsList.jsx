import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";
import { useState } from "react";
import Modal from "./Modal";

function PostsList({ isPosting, onStopPosting }) {
  //initial state for the list of posts
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    setPosts((postData) => {
      return [postData, ...posts];
    });
    console.log([postData, ...posts])
}

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}
      <ul className={classes.posts}>
        <Post author="Nicolas" body="Argentina is World Champion!" />
      </ul>
    </>
  );
}

export default PostsList;
