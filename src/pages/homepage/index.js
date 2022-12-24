import React from "react";
import ArticlesList from "../../common/ArticlesList";
import articles from "../../utils/articleContent";

const Homepage = () => {
  return (
    <div>
      <h1>Home</h1>
      <ArticlesList articles={articles} />
    </div>
  );
};

export default Homepage;
