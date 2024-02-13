import React from 'react';
import ArticlesList from '../features/articles/ArticlesList';
import ArticleDetails from '../features/articles/ArticleDetails';
import { Routes, Route } from 'react-router-dom';

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<ArticlesList />} />
      <Route path='/articles/:id' element={<ArticleDetails />} />
    </Routes>
  );
}

export default AppRoutes;