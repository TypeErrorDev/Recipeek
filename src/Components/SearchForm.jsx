import { useState } from "react";
import Nav from "./Nav";
import Cards from "./Cards";

const SearchForm = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const url = searchTerm.trim()
        ? `https://dummyjson.com/recipes/search?q=${searchTerm}`
        : "https://dummyjson.com/recipes";

      const res = await fetch(url);
      const data = await res.json();
      setRecipes(data.recipes || []);
    } catch (error) {
      console.error("Error fetching recipes:", error);
      setRecipes([]);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <Nav />
      <form
        onSubmit={handleSearch}
        className="flex justify-center items-center w-full max-w-lg px-4 mt-10"
      >
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search for recipes"
          className="h-10 w-full rounded-lg px-5 text-background-dark text-l"
        />
        <button
          type="submit"
          className="border ml-5 h-10 w-20 rounded-lg bg-warning-light text-background-dark font-bold"
        >
          Search
        </button>
      </form>

      <div className="featured-recipes flex flex-col md:flex-row flex-wrap justify-center items-center md:w-[700px] lg:w-[1000px] mt-10">
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
          <p className="text-[50px] w-auto text-wrap text-warning-dark p-2 text-center hidden">
            Loading...🍳🔥
          </p>
        )}
      </div>
    </div>
  );
};

export default SearchForm;
