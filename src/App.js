
import './App.css';
import Blog from './components/Blog';

import { createContext, useContext } from 'react';

const PostContext = createContext()

function App() {
  const post = { title: "My Blog Post!" };

  return (
    <PostContext.Provider value={post}>
      <Blog1 />
      <Blog/>
    </PostContext.Provider>
  );
}

function Blog1() {
  return <BlogPost />
}

function BlogPost() {
  const post = useContext(PostContext)

  return <h1>{post.title}</h1>
}

export default App;
