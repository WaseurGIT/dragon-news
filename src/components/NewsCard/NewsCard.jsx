import { useState } from "react";
import { CiBookmark, CiShare2, CiStar } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import star from "../../assets/star.png"

const NewsCard = ({ article }) => {
  const { id, title, rating, total_view, author, thumbnail_url, details } =
    article;

  const [isExpanded, setIsExpanded] = useState(false);
  const limit = 150;
  const shortText = details.slice(0, limit);

  const handleShare = (article) => {
    if (navigator.share) {
      navigator
        .share({
          title: article.title,
          text: article.details.slice(0, 120) + "...",
          url: window.location.origin + `/news/${article.id}`,
        })
        .then(() => console.log("Shared successfully"))
        .catch((error) => console.log("Error sharing:", error));
    } else {
      alert("Sharing not supported on this device. Try copying the link.");
    }
  };

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
            <div className="relative group">
              <CiShare2 className="w-5 h-5 cursor-pointer" onClick={handleShare}/>

              <div className="absolute hidden group-hover:block bg-white shadow-md px-2 rounded ">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.origin}/news/${id}`}
                  target="_blank"
                  className="block text-sm"
                >
                  Facebook
                </a>

                <a
                  href={`https://twitter.com/intent/tweet?url=${window.location.origin}/news/${id}&text=${title}`}
                  target="_blank"
                  className="block text-sm py-2"
                >
                  Twitter
                </a>

                <a
                  href={`https://wa.me/?text=${window.location.origin}/news/${id}`}
                  target="_blank"
                  className="block text-sm"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
        <figure>
          <img src={thumbnail_url} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{isExpanded ? details : shortText + "..."}</p>
          <Link
            to={`/news/${id}`}
            className="text-orange-600 font-semibold mt-2 cursor-pointer"
          >
            Read More
          </Link>
        </div>
        <hr className="text-gray-400 mx-5" />
        <div className="flex items-center justify-between m-5">
          <div className="flex items-center gap-1">
            <img src={star} alt="" />
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
