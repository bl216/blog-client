/*
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [hello, setHello] = useState("");

  useEffect(() => {
    axios
      .get("/api/hello")
      .then((response) => setHello(response.data))
      .catch((error) => console.log(error));
  }, []);

  return <div>from Backend : {hello}</div>;
}

export default App;
*/

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Company from "./Component/Company";
import { Provider } from 'react-redux';
import compstore from './Redux/Store';

function App() {
  return (
    <Provider store={compstore}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Company></Company>}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
