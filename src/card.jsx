import React, { useState } from 'react';
import './App.css';

const Card = ({ recipe }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = (e) => {
    e.stopPropagation(); 
    setIsExpanded(!isExpanded);
  };

  const maxIngredients = 3;
  const truncatedIngredients = recipe.ingredients.slice(0, maxIngredients);
  const shouldTruncate = recipe.ingredients.length > maxIngredients;

  const handleCardClick = () => {
    window.location.href = "/" + encodeURIComponent(recipe.name);
  };

  return (
    <div className="card" onClick={handleCardClick}>
      {recipe.category && (
        <span className="category-label">{recipe.category}</span>
      )}

      <img src={recipe.image} alt={recipe.name} className="card-img" />
      <div className='card-content'>

        <h3 className="card-title">{recipe.name} - {recipe.prepTime}</h3>
        <p className="prep-description">{recipe.description}</p>

        <h4 className="card-subtitle">Ingredients:</h4>
        <ul className="ingredients">
          {isExpanded
            ? recipe.ingredients.map((item, idx) => <li key={idx}>{item}</li>)
            : truncatedIngredients.map((item, idx) => <li key={idx}>{item}</li>)
          }
        </ul>

        {shouldTruncate && (
          <p className="read-more-link" onClick={handleToggle}>
            {isExpanded ? 'Read Less' : 'Read More'}
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
