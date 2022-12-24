import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import Homepage from "./pages/homepage";
import About from "./pages/about";
import Articles from "./pages/articlesList";
import Navbar from "./utils/NavBar";
import Article from "./pages/article";
import NotFoundPage from "./utils/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div id="page-body">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/articles" element={<Articles />} />
            <Route exact path="/articles/:articleId" element={<Article />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
