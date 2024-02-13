import ArticlesList from './ArticlesList';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import * as articleService from '../../services/articleService';

jest.mock('../../constants', () => ({
  API_URL: 'http://your-test-api-url',
}));

jest.mock('../../services/articleService', () => ({
  articleService: jest.fn(),
}));

global.console.error = jest.fn();

describe("Articles List Component", () => {
  const MockPosts = [
    {id: 1, title: "Article 1", content: "Hello World"},
    {id: 2, title: "Article 2", content: "Hello World"},
  ];

  beforeEach(() => {
    articleService.articleService.mockResolvedValue(MockPosts);
  });

  test("render the list of posts", async () => {
    render(<ArticlesList />, { wrapper: MemoryRouter });

    await waitFor(() => screen.getByText("Post 1"));

    expect(screen.getByText("Article 1")).toBeInTheDocument();
    expect(screen.getByText("Article 2")).toBeInTheDocument();
  });
});