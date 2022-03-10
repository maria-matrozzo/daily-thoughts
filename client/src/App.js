import './App.css';
import React, { useState, useEffect } from "react";
import Post from './Post';
import PostForm from './PostForm';

function App() {
  const [allPosts, setAllPosts] = useState([]);

  // GET posts
  useEffect( () => {
    fetch('/posts')
    .then(r => r.json())
    .then( (fetchedPosts) => {
      setAllPosts(fetchedPosts)
   }) 
  }, [] )

  // CREATE a post
  const createPost = (post) => {
    fetch('/posts',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(post)
    })
    .then(res => res.json())
    .then(newPost => {
      setAllPosts([newPost,...allPosts])
      console.log("does the post request work?", allPosts)
    })
  }

      // UPDATE Post
    // const editBlog = (blog) => {
    //   fetch(`http://localhost:9292/games/${games.id}`, {
    //     method:'PATCH',
    //     headers:{
    //       'Content-Type':'application/json'
    //   },
    //   body: JSON.stringify(...blog) })
    //   .then(r => r.json())
    //   .then(data => {
    //     setGameList(gameList.map(g => {
    //       if(blog.id === data.id){
    //         return data
    //       } else {
    //         return g
    //       }
    //     }))
    //   })
    // }

    // DELETE Posts
    const deletePost = (id) => {
      fetch(`/posts/${id}`,{
        method:'DELETE',
        headers:{'Content-Type':'application/json'}
      })
      .then(r => r.json())
      .then(data => {
        setAllPosts(allPosts.filter(p => p.id !== id))
        console.log(data)
      })
    }

  return (
    <div>

      <PostForm 
      createPost = {createPost} />

      {allPosts.map((eachPost) => {
        return(
          <Post 
          postInfo = {eachPost}
          deletePost = {deletePost}
          key = {eachPost.id} />
        )})}
    </div>
  );
};

export default App;
