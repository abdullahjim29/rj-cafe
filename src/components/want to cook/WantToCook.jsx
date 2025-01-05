const WantToCook = ({ recipeQueue }) => {
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
                  <tr>
                    <th>{idx + 1}</th>
                    <td>{recipe.recipe_name}</td>
                    <td>{recipe.preparing_time}</td>
                    <td>{recipe.calories}</td>
                    <td>
                    <button onClick={() => handleWantToCook(recipe)} className="btn bg-green-400 font-medium rounded-full px-6">Preparing</button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        }
      </div>
    </div>
  );
};

export default WantToCook;

// recipeQueue.map((recipe, idx) => <tbody key={idx}>
//   <tbody>
//     {/* row 1 */}
//     <tr>
//       <th>{idx + 1}</th>
//       <td>{recipe.recipe_name}</td>
//       <td>{recipe.preparing_time}</td>
//       <td>{recipe.calories}</td>
//     </tr>
//   </tbody>
// </tbody>)
