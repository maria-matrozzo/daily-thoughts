import './App.css';
import React, { useState, useEffect } from "react";
import Post from './Post';

function App() {
  const [allPosts, setAllPosts] = useState([]);

  useEffect( () => {
    fetch('/posts')
    .then(r => r.json())
    .then( (fetchedPosts) => {
      setAllPosts(fetchedPosts)
   }) 
  }, [] )

  console.log(allPosts)

  return (
    <div>
      {allPosts.map((eachPost) => {
        return(
          <Post 
          postInfo = {eachPost}
          key = {eachPost.id} />
        )
      })}
    </div>
  );
};

export default App;
