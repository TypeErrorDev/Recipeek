const Cards = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <h1>Featured Recipes</h1>
      </div>
      <div className="border-double bg-foreground-dark h-44 w-40 text-warning-dark rounded-xl flex flex-col justify-center items-center">
        <span>Image</span>
        <p>Recipe Name</p>
        <p>Rating</p>
        <p>Tags</p>
      </div>
    </div>
  );
};

export default Cards;
