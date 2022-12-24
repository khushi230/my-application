import React from "react";

import articles from "../../utils/articleContent";
import ArticlesList from "../../common/ArticlesList";

const Articles = () => {
  return (
    <div style={{ textAlign: "left" }}>
      <h1>Articles</h1>
      <ArticlesList articles={articles} />
    </div>
  );
};

export default Articles;
