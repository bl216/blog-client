import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Main from './component/main/form';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main></Main>}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
