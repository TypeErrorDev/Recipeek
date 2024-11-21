import { useNavigate } from "react-router-dom";

const Cards = ({ image, name, tags, rating, id, fullRecipe }) => {
  const navigate = useNavigate();

  const randomColor = () => {
    const r = Math.floor(Math.random() * 128) + 128;
    const g = Math.floor(Math.random() * 128) + 128;
    const b = Math.floor(Math.random() * 128) + 128;

    return `#${((1 << 24) | (r << 16) | (g << 8) | b)
      .toString(16)
      .slice(1)
      .padStart(6, "0")}`;
  };

  const color = randomColor();

  const handleCardClick = () => {
    navigate(`/recipe/${id}`, { state: { fullRecipe } });
  };

  return (
    <div>
      <div className="flex justify-center items-center"></div>
      <div className="flex flex-row md:flex-row justify-center items-center my-2">
        <div
          onClick={handleCardClick}
          className="border-double bg-foreground-dark h-72 w-64 text-wrap text-warning-dark rounded-xl flex flex-col justify-around items-center text-center m-5 transition-all transform hover:scale-110 duration-1000 hover:rotate-3 cursor-pointer"
        >
          <div>
            <img
              src={image}
              alt={name}
              className="h-24 w-24 rounded-full mb-2"
            />
          </div>
          <div>
            <h2>{name}</h2>
          </div>
          <div>
            <p>Rating: {rating}</p>
          </div>
          <div className="flex flex-wrap justify-center ">
            {tags.map((tag, index) => (
              <span
                key={index}
                style={({ backgroundColor: color }, { borderColor: color })}
                className="text-xs px-4 py-1 rounded-full m-1 text-wrap border-2 border-solid transition-all transform hover:scale-105"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
