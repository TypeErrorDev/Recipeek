const Cards = ({ image, name, tags, rating }) => {
  return (
    <div>
      <div className="flex justify-center items-center"></div>
      <div className="flex flex-row md:flex-row justify-center items-center my-2">
        <div className="border-double bg-foreground-dark h-60 w-64 text-wrap text-warning-dark rounded-xl flex flex-col justify-center items-center m-5">
          <img src={image} alt={name} className="h-24 w-24 rounded-full mb-2" />
          <h2>{name}</h2>
          <p>Rating: {rating}</p>
          <div>
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-white text-warning-light px-2 py-1 rounded-full m-1"
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
