import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../recipe/Recipe";

const Recipes = ({handleWantToCook}) => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("./recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="w-full md:w-2/3">
      <div className="grid lg:grid-cols-2 gap-6">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe_id}
            recipe={recipe}
            handleWantToCook={handleWantToCook}
          ></Recipe>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
