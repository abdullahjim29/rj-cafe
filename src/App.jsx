import { useState } from "react";
import Header from "./components/Header/Header";
import OurRecipe from "./components/our recipe/OurRecipe";
import Recipes from "./components/recipes/Recipes";
import WantToCook from "./components/want to cook/WantToCook";

function App() {
  const [recipeQueue, setRecipeQueue] = useState([]);
  const [currentlyCooking, setCurrentlyCooking] = useState([]);
  const [totalTimes, setTotalTimes] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  const handleWantToCook = (recipe) => {
    const isAlreadyHave = recipeQueue.find(
      (preRecipe) => preRecipe.recipe_id === recipe.recipe_id
    );
    if (!isAlreadyHave) {
      setRecipeQueue([...recipeQueue, recipe]);
    } else {
      alert("This recipe is already selected for cooking");
    }
  };

  const handlePreparingBtn = (id) => {
    // remove
    const remove = recipeQueue.find((rec) => rec.recipe_id === id);

    // remaining
    const remaining = recipeQueue.filter((rec) => rec.recipe_id !== id);
    setRecipeQueue(remaining);
    setCurrentlyCooking([...currentlyCooking, remove]);
  };

  const calculateTotalTimesAndCalories = (time, calorie) => {
    setTotalTimes(totalTimes + time);
    setTotalCalories(totalCalories + calorie);
  }

  return (
    <>
      {/* header */}
      <Header></Header>
      {/* our recipe */}
      <OurRecipe></OurRecipe>
      {/* resipe cards and sidebar */}
      <div className="w-11/12 mx-auto flex flex-col md:flex-row gap-4">
        {/* recipe cards */}
        <Recipes handleWantToCook={handleWantToCook}></Recipes>
        {/* sidebar */}
        <WantToCook
          recipeQueue={recipeQueue}
          handlePreparingBtn={handlePreparingBtn}
          currentlyCooking={currentlyCooking}
          calculateTotalTimesAndCalories={calculateTotalTimesAndCalories}
          totalTimes={totalTimes} totalCalories={totalCalories}
        ></WantToCook>
      </div>
    </>
  );
}

export default App;
