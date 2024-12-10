import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import Nav from "./Nav";

const ProductDetails = () => {
  const { id } = useParams();
  const location = useLocation();

  const [recipe, setRecipe] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const processRecipe = (recipeData) => {
      console.log("Fetched Recipe Data:", recipeData);

      setRecipe(recipeData);

      if (Array.isArray(recipeData.ingredients)) {
        setIngredients(recipeData.ingredients);
      } else {
        console.warn(
          "Ingredients field is not an array:",
          recipeData.ingredients
        );
        setIngredients([]);
      }

      if (Array.isArray(recipeData.instructions)) {
        setSteps(recipeData.instructions);
      } else {
        console.warn(
          "Instructions field is not an array:",
          recipeData.instructions
        );
        setSteps([]);
      }
      setLoading(false);
    };

    if (location.state && location.state.recipe) {
      processRecipe(location.state.recipe);
    } else {
      const fetchRecipeDetails = async () => {
        try {
          const res = await axios.get(`https://dummyjson.com/recipes/${id}`);
          processRecipe(res.data);
        } catch (err) {
          console.error("Error fetching recipe details:", err);
          setError("Failed to fetch recipe details");
          setLoading(false);
        }
      };
      fetchRecipeDetails();
    }
  }, [id, location.state]);

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <p className="text-2xl w-auto text-wrap text-warning-dark p-2 text-center">
          Loading...🍳🔥
        </p>
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-2xl text-warning-dark">{error}</p>
      </div>
    );
  }
  if (!recipe) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-2xl text-warning-dark">No Recipe Found</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center text-warning-dark">
      <div className="mt-16 h-fit w-[750px] flex flex-col justify-center items-center  border-warning-light border-2 rounded-xl p-5 ">
        <Nav />
        {/* back button to go back to search */}
        <div className="flex justify-center items-center">
          <button
            className="bg-[#1A1B26] text-[#FFE39C] p-2 rounded-md m-2 "
            onClick={() => window.history.back()}
          >
            Back
          </button>
        </div>
        <div>
          <img
            src={recipe.image}
            alt={recipe.name}
            className="h-60 w-60 rounded-md mb-2"
          />
        </div>
        <div>
          <h2>{recipe.name}</h2>
          <div>
            <p>Rating: {recipe.rating}</p>
          </div>
          <div className="recipe-details">
            {/* Ingredients Section */}
            <div className="ingredients-section">
              <h3 className="text-xl mb-2">Ingredients</h3>
              <div className="grid grid-cols-2 gap-4">
                {recipe.ingredients.map((ingredient, index) => (
                  <p key={index} className="mb-1">
                    {ingredient}
                  </p>
                ))}
              </div>
            </div>

            {/* Instructions Section */}
            <div className="instructions-section mt-4">
              <h3 className="text-xl mb-2">Instructions</h3>
              <ol className="list-decimal pl-5">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index} className="mb-2">
                    {instruction}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
