import { useEffect, useState } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";

import Cards from "./Cards";

const Featured = () => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      const randomNumber = Math.floor(Math.random() * 50);
      try {
        const res = await axios.get(
          `https://dummyjson.com/recipes?limit=6&skip=${randomNumber}`
        );
        // &select=name,image,rating,tags
        setRecipes(res.data.recipes);
        console.log(res.data.recipes);
      } catch (err) {
        console.error("Error fetching recipes:", err);
        setError("Failed to fetch featured recipes.");
      }
    };

    fetchRecipes();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className=" featured-recipes flex flex-col md:flex-row flex-wrap justify-center items-center md:w-[700px] lg:w-[1000px] mt-10">
      {recipes.length > 0 ? (
        recipes.map((recipe, index) => (
          <Cards
            key={index}
            fullRecipe={recipe}
            image={recipe.image}
            name={recipe.name}
            rating={recipe.rating}
            tags={recipe.tags}
            id={recipe.id}
          />
        ))
      ) : (
        <p className="text-2xl w-auto text-wrap text-warning-dark p-2 text-center">
          Loading...🍳🔥
        </p>
      )}
    </div>
  );
};

export default Featured;
