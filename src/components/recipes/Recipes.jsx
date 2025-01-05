import { useEffect } from "react";
import { useState } from "react";

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        fetch('./recipes.json')
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])
    return (
        <div className="w-full md:w-2/3">
            
        </div>
    );
};

export default Recipes;