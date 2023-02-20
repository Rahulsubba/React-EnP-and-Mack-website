import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Mack from "./Component1/websiteParent";
import EnP from "./Component2/Email and Password";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EnP />} />
        <Route path="/dashboard" element={<Mack />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

