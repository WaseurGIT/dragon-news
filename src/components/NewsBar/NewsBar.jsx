import React, { useEffect, useState } from "react";
import NewsCard from "../NewsCard/NewsCard";

const NewsBar = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => setArticles(data));
  }, []);

  return (
    <div>
      <h1 className="text-lg font-semibold ml-10">Dragon News Home</h1>
      <div>
        {articles.map((article) => (
          <NewsCard article={article}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default NewsBar;
