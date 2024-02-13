import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { fetchArticle } from '../../services/articleService';

function ArticleDetails() {
  const [article, setArticle] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCurrentArticle = async () => {
      try {
        const json = await fetchArticle(id);
        setArticle(json);
      } catch (e) {
        console.log("An error ocurred", e);
      }
    };
    fetchCurrentArticle();
  }, [id])

 

  if (!article) return <h2>Loading...</h2>;

  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.author}</p>

      <Link to='/'>Back to Articles</Link>
    </div>
  )
}

export default ArticleDetails;