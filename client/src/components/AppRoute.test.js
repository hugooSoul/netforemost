import React from 'react';
import { render, screen } from '@testing-library/react';
import AppRoutes from './AppRoutes';
import { MemoryRouter } from 'react-router';

jest.mock('../features/articles/ArticlesList', () => {
  const MockArticleList = () => (
    <div>Your Matcher for ArticleList component.</div>
  );

  return MockPostList;
});

jest.mock('../features/articles/ArticleDetails', () => {
  const MockArticleDetail = () => (
    <div>Your Matcher for ArticleDetails component.</div>
  );

  return MockArticleDetail;
});

jest.mock('../constants', () => ({
  API_URL: 'http://your-test-api-url',
}));

describe('AppRoutes component', () => {

  const renderWithRouter = (ui, { initialEntries = ['/']} = {}) => {
    return render(ui, {
      wrapper: ({ children }) => (
        <MemoryRouter initialEntries={initialEntries}>{children}</MemoryRouter>
      )
    });
  };

  test('root path renders ArticleList', () => {
    renderWithRouter(<AppRoutes />, { initialEntries: ['/'] });

    const expectedText = 'Your Matcher for ArticleList component.';
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });

  test('root path renders ArticleDetails', () => {
    renderWithRouter(<AppRoutes />, { initialEntries: ['/articles/1'] });

    const expectedText = 'Your Matcher for ArticleDetails component.';
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
