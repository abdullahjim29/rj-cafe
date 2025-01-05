import { useState } from 'react';
import Header from './components/Header/Header'
import OurRecipe from './components/our recipe/OurRecipe'
import Recipes from './components/recipes/Recipes'
import WantToCook from './components/want to cook/WantToCook';

function App() {
  const [recipeQueue, setRecipeQueue] = useState([]);

  const handleWantToCook = recipe => {
    setRecipeQueue([...recipeQueue, recipe]);
  };

  return (
    <>
      {/* header */}
      <Header></Header>
      {/* our recipe */}
      <OurRecipe></OurRecipe>
      {/* resipe cards and sidebar */}
      <div className='w-11/12 mx-auto flex flex-col md:flex-row gap-4'>
        {/* recipe cards */}
        <Recipes handleWantToCook={handleWantToCook}></Recipes>
        {/* sidebar */}
        <WantToCook recipeQueue={recipeQueue}></WantToCook>
      </div>
    </>
  )
}

export default App
