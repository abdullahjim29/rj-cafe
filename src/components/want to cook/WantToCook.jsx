const WantToCook = ({
  recipeQueue,
  handlePreparingBtn,
  currentlyCooking,
  calculateTotalTimesAndCalories,
  totalCalories,
  totalTimes
}) => {
  return (
    <div className="w-full md:w-1/3 border p-2 rounded-lg">
      <h2 className="text-center text-xl font-medium">
        Want To Cook : {recipeQueue.length}
      </h2>
      <hr className="my-3 w-9/12 mx-auto" />
      <div>
        {
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Time</th>
                  <th>Calories</th>
                  <th></th>
                </tr>
              </thead>
              {recipeQueue.map((recipe, idx) => (
                <tbody key={idx}>
                  <tr className="hover">
                    <th>{idx + 1}</th>
                    <td>{recipe.recipe_name}</td>
                    <td>{recipe.preparing_time}</td>
                    <td>{recipe.calories}</td>
                    <td>
                      <button
                        onClick={() => {
                          handlePreparingBtn(recipe.recipe_id)
                          calculateTotalTimesAndCalories(recipe.preparing_time, recipe.calories)
                        }}
                        className="btn bg-green-400 font-medium rounded-full px-6"
                      >
                        Preparing
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        }
      </div>

      <div className="mt-10">
        <h2 className="text-center text-xl font-medium">
          Currently Cooking : {currentlyCooking.length}
        </h2>
        {
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Time</th>
                  <th>Calories</th>
                  <th></th>
                </tr>
              </thead>
              {currentlyCooking.map((recipe, idx) => (
                <tbody key={idx}>
                  <tr className="hover">
                    <th>{idx + 1}</th>
                    <td>{recipe.recipe_name}</td>
                    <td>{recipe.preparing_time}</td>
                    <td>{recipe.calories}</td>
                    <td></td>
                  </tr>
                </tbody>
              ))}
              <tr>
                <th></th>
                <td></td>
                <td>Total Time = {totalTimes}</td>
                <td>Total Calories = {totalCalories}</td>
                <td></td>
              </tr>
            </table>
          </div>
        }
      </div>
    </div>
  );
};

export default WantToCook;
