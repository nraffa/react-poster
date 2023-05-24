import PostsList from "./components/PostsList";
import MainHeader from "./components/MainHeader";
import { useState } from "react";

function App() {
  //initial state for the modal
  const [showModal, setShowModal] = useState(false);

  function hideModalHandler() {
    setShowModal(false);
  }

  function showModalHandler() {
    setShowModal(true);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler}/>
      <main>
        <PostsList 
        isPosting={showModal}
        onStopPosting={hideModalHandler}/>
      </main>
    </>
  );
}

export default App;
