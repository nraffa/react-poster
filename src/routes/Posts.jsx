import PostsList from "../components/PostsList";
import { Outlet } from "react-router-dom";

function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostsList />
      </main>
    </>
  );
}

export default Posts;

export async function loader() {
    const response = await fetch("http://localhost:8080/posts").catch(function (error) {
     return error.message}  
    )
    const resData = await response.json();
    return resData.posts;
}