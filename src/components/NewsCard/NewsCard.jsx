import { CiBookmark, CiShare2, CiStar } from "react-icons/ci";
import { FaEye } from "react-icons/fa";

const NewsCard = ({ article }) => {
  const { title, rating, total_view, author, thumbnail_url, details } = article;

  return (
    <div className="flex items-center justify-center mt-5">
      <div className="card bg-base-100 w-[600px] shadow-sm">
        <div className="flex items-center justify-between mx-4">
          <div className="flex items-center gap-3 my-3">
            <img
              src={author?.img}
              className="w-10 h-10 rounded-full object-cover"
              alt="Author"
            />

            <div className="flex flex-col">
              <h1 className="font-semibold text-lg leading-tight">
                {author?.name}
              </h1>
              <p className="text-sm text-gray-500">
                {author?.published_date.split("T")[0]}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <CiBookmark className="w-5 h-5" />
            <CiShare2 className="w-5 h-5" />
          </div>
        </div>
        <figure>
          <img src={thumbnail_url} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{details}</p>
        </div>
        <hr className="text-gray-400 mx-5" />
        <div className="flex items-center justify-between m-5">
          <div className="flex items-center gap-1">
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-yellow-500"
                aria-label="1 star"
              />
            </div>
            <h1>{rating?.number}</h1>
          </div>
          <div className="flex items-center gap-2">
            <FaEye className="w-4 h-4" />
            <h1>{total_view}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
