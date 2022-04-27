import React, { useContext } from 'react';
import Card from '../components/Card';
import RecipesContext from '../Context/RecipesContext';
import './Foods.css';

function Foods() {
  const { meals } = useContext(RecipesContext);
  console.log(meals);
  return (
    <div className="card-container">
      {meals.length && meals.map(({ strMealThumb, idMeal, strMeal }, index) => (<Card
        key={ idMeal }
        name={ strMeal }
        img={ strMealThumb }
        index={ index }
      />))}
    </div>
  );
}

export default Foods;
