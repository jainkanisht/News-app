import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import'./NewsBoard.css';

const NewsBoard = ({category}) => {
  const [articles, setArticles] = useState([]);

 useEffect(() => {
  const API_KEY = import.meta.env.VITE_API_KEY;

  if (!API_KEY) {
    console.error("❌ Missing API Key!");
    return;
  }

  let url = category
    ? `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`
    : `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`; // for "all news"

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => setArticles(data.articles))
    .catch((error) => console.error("Error fetching news:", error));
}, [category]); // 👈 FIXED: add category as dependency



  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      <div className="news-container">
      {articles.map((news, index) => {
        return (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        );
      })}
    </div>
    </div>
  );
};

export default NewsBoard;
