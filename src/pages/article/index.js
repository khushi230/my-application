import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import { articles } from "../../utils/articleContent";
import NotFoundPage from "../../utils/NotFoundPage";

const Article = () => {
  const [article, setArticle] = useState({});

  const { articleId } = useParams();

  useEffect(() => {
    let articleData = articles.find((article) => article.name === articleId);
    setArticle(articleData);
  }, [articleId]);

  if (!article?.title) return <NotFoundPage />;

  return (
    <div style={{ paddingTop: "20px" }}>
      <Link to="/articles">
        <button>{"<Back"}</button>
      </Link>
      <div style={{ marginTop: "20px" }}>
        <h3>{article?.title}</h3>
      </div>
      <div style={{ marginTop: "20px" }}>
        {article?.content?.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default Article;
