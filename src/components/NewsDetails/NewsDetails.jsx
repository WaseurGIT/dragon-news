import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import RightAside from "../RightAside/RightAside";

const NewsDetails = () => {
  const article = useLoaderData();
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div className="mb-10 grid grid-cols-4 gap-5 mx-20">
      {/* 75% area */}
      <div className="col-span-3">
        <div className="card bg-base-100 shadow-sm">
          <figure>
            <img src={article.thumbnail_url} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{article.title}</h2>
            <p>{article.details}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary" onClick={goToHome}>
                Back
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 25% area */}
      <div className="col-span-1">
        <RightAside />
      </div>
    </div>
  );
};

export default NewsDetails;
