import React from 'react'
// import { Route, Switch } from 'react-router-dom'
import FetchedPosts from './Containers/FetchedPosts';
import PostForm from './Containers/PostForm';
import Posts from './Containers/Posts';

function App() {
  return (
    <div className="App">
      <div className="container pt-2">
        <div className="row p-3 m-0">
          <h4>PostForm</h4>
          <PostForm />
        </div>
        <div className="row">
          <div className="col m-2 p-3 border">
            <h4>Posts</h4>
            <Posts />
          </div>
          <div className="col m-2 p-3 border">
            <h4>Fetched Post</h4>
            <FetchedPosts posts={[]} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
