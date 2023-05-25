import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";
import { useState } from "react";
import Modal from "./Modal";

function PostsList({ isPosting, onStopPosting }) {
  //initial state for the list of posts
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    setPosts((existingPosts) => {
      return [postData, ...existingPosts];
    });
    console.log([postData, ...posts]);
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{textAlign:'center' , color:'white'}}>
          <h2>There are no posts yet...</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
