import axios from "axios";

import Cards from "./Cards";
const Featured = () => {
  const randomNumber = Math.floor(Math.random() * 100);
  // TODO: Fetch data from the API for featured recipes
  //   https://dummyjson.com/recipes?limit=6&skip={RandomNumber}&select=name,image,rating,tags
  axios({
    url: `https://dummyjson.com/recipes?limit=6&skip=${randomNumber}&select=name,image,rating,tags`,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      const results = res.data;
      console.log(results);
    })
    .catch((err) => {
      console.error("Message: ", err);
    });

  //   TODO: Random number generator

  return (
    <div>
      <Cards />
    </div>
  );
};

export default Featured;
