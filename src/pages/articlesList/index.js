import React from "react";
import { Link } from "react-router-dom";

import articles from "../../utils/articleContent";

const ArticlesList = () => {
  return (
    <div style={{ textAlign: "left" }}>
      <h1>Articles</h1>
      {articles.map((article) => (
        <div key={article.name} style={{ marginTop: "50px" }}>
          <Link to={`${article.name}`}>{article.title}</Link>
          <div>
            <p>{article.content[0].substring(0, 150)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticlesList;
