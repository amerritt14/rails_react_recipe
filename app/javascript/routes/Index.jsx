import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Recipes from "../components/Recipes";
import Recipe from "../components/Recipe";

export default (
  <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/recipes' element={<Recipes />} />
      <Route path='/recipes/:id' element={<Recipe />} />
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <h1>404</h1>
            <p>Page not Found</p>
          </main>
        }
      />
    </Routes>
  </Router>
);
