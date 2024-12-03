import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import Nav from "./Nav";

const ProductDetails = () => {
  const { id } = useParams();
  const location = useLocation();

  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (location.state && location.staterecipe) {
      setRecipe(location.state.recipe);
    } else {
      const fetchRecipeDetails = async () => {
        try {
          const res = await axios.get(`https://dummyjson.com/recipes/${id}`);
          setRecipe(res.data);
          setLoading(false);
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
      <div className="mt-16 h-screen w-96 flex flex-col justify-center items-center bg-secondary_text-light">
        <Nav />
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
          <div>
            <p className="text-wrap text-xl px-5">{recipe.instructions}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
