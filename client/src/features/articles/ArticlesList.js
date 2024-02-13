import React, { useState, useEffect } from 'react';
import { fetchAllArticles } from '../../services/articleService';
import { Link } from 'react-router-dom';

function ArticlesList() {
  const [articles, setArticles] = useState([]);
  const [, setLoading] = useState(true);
  const [, setError] = useState(null);

  useEffect(() => {
    async function loadPosts() {
      try{
        const data = await fetchAllArticles();
        setArticles(data);
        setLoading(false);
      } catch (e) {
        setError(e);
        setLoading(false);
        console.error('Failed to fetch posts: ', e);
      }
    }
    loadPosts();
  }, []);

  return (
    <div>
      {articles.map((article) => (
        <div key={article.id} className="post-container">
          <h2>
            <Link to={`/articles/${article.id}`} className='post-title'>
              {article.title}
            </Link>
          </h2>
        </div>
      ))}
    </div>
  );
}

export default ArticlesList;
