import React from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import './App.css';
import Main from './component/main/form';
import Post from './component/main/post';
import PostRead from './component/main/postRead';

function App() {
    const { pathname, hash, key } = useLocation();
  return (
        <Routes>
          <Route path="/" element={<Main></Main>}></Route>
            <Route path="/post/create" element={<Post></Post>}></Route>
            <Route path={pathname} element={<PostRead></PostRead>}></Route>
        </Routes>
  );
}

export default App;
