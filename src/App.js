import React, { useState } from 'react';
import Card from './card';
import recipesData from './data/data';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRecipes = recipesData.filter(recipe =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <header className="header">
        <h1>Recipe Finder</h1>
      </header>

      <div className="search-section">
        <input type="text" placeholder="Search for recipes..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="search-input"/>
        <button className="search-button">Search Recipe</button>
      </div>

      <div className="card-container">
        {filteredRecipes.map(recipe => (
          <Card key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default App;
