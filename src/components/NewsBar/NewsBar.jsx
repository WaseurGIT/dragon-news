import React, { useEffect, useState } from "react";
import NewsCard from "../NewsCard/NewsCard";




const NewsBar = () => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => setArticles(data));
  }, []);

  // calculate for pagination
  const totalPages = Math.ceil(articles.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;
  const currentArticles = articles.slice(startIndex, endIndex);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <h1 className="text-lg font-semibold ml-10">Dragon News Home</h1>
      <div>
        {currentArticles.map((article) => (
          <NewsCard article={article}></NewsCard>
        ))}
      </div>
      {/* pagination */}
      <div className="join flex justify-center my-6">
        <button
          onClick={previousPage}
          className="join-item btn"
          disabled={currentPage === 1}
        >
          « Prev
        </button>

        <button className="join-item btn">
          Page {currentPage} of {totalPages}
        </button>

        <button
          onClick={nextPage}
          className="join-item btn"
          disabled={currentPage === totalPages}
        >
          Next »
        </button>
      </div>
    </div>
  );
};

export default NewsBar;
