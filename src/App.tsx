import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Main from './component/main/form';
import Counter from './container/appContainer';

function App() {
  return (
      <BrowserRouter>
          <Counter/>
        <Routes>
          <Route path="/" element={<Main></Main>}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
