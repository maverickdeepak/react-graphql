import { useState } from "react";
import "./App.css";
import CharacterList from "./pages/CharacterList";
import { Routes, Route, Link } from "react-router-dom";
import Character from "./pages/Character";
import Search from "./pages/Search";

function App() {
  return (
    <div className="App">
      <h1>Character World 🐇</h1>
      <Routes>
        <Route strict exact path="/search" element={<Search />} />
        <Route strict exact path="/" element={<CharacterList />} />
        <Route strict exact path="/:id" element={<Character />} />
      </Routes>
    </div>
  );
}

export default App;
