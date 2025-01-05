import Header from './components/Header/Header'
import OurRecipe from './components/our recipe/OurRecipe'
import Recipes from './components/recipes/Recipes'
import Sidebar from './components/sidebar/Sidebar'
function App() {
  return (
    <>
      {/* header */}
      <Header></Header>
      {/* our recipe */}
      <OurRecipe></OurRecipe>
      {/* resipe cards and sidebar */}
      <div className='w-11/12 mx-auto flex gap-4'>
        {/* recipe cards */}
        <Recipes></Recipes>
        {/* sidebar */}
        <Sidebar></Sidebar>
      </div>
    </>
  )
}

export default App
