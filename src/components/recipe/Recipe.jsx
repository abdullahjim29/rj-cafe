const Recipe = ({ recipe, handleWantToCook }) => {
  const {
    recipe_image,
    recipe_id,
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = recipe;
  return (
    <div>
      <div className="card bg-base-100 border p-4">
        <figure>
          <img className="rounded-t-lg"
            src={recipe_image}
            alt={recipe_name}
          />
        </figure>
        <div className="card-body">
          <h3 className="card-title text-3xl">{recipe_name}</h3>
          <p className="text-lg text-gray-600">{short_description}</p>
          <hr className="my-4" />
          <div>
            <ul><span className="text-xl font-semibold">Ingredients: {ingredients.length}</span>
            {
                ingredients.map((ingredient, idx) => <li className="list-disc ml-6" key={idx}>{ingredient}</li> )
            }
            </ul>
            <hr className="my-4" />
            <div className="flex gap-8">
                <div className="flex gap-2 items-center">
                <i class="fa-regular fa-clock text-lg"></i>
                <p className="text-lg">{preparing_time} minutes</p>
                </div>
                <div className="flex gap-2 items-center">
                <i class="fa-solid fa-fire-flame-curved text-lg"></i>
                <p className="text-lg">{calories} calories</p>
                </div>
            </div>
          </div>
          <div className="card-actions mt-4">
            <button onClick={() => handleWantToCook(recipe)} className="btn bg-green-400 text-lg font-medium rounded-full px-8">Want To Cook</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
