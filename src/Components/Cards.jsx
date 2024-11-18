const Cards = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <h1>Featured Recipes</h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center my-2">
        <div className="border-double bg-foreground-dark h-52 w-48 text-warning-dark rounded-xl flex flex-col justify-center items-center mb-5">
          <span>Image</span>
          <p>Recipe Name</p>
          <p>Comments</p>
          <p>Rating</p>
          <p>Tags</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
