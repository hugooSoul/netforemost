import React from 'react';
import { render, screen } from '@testing-library/react';
import NavBar from './NavBar';
import { MemoryRouter } from 'react-router';

describe("NavBar component", () => {
  const renderNavBar = () => {
    render(<NavBar />, { wrapper: MemoryRouter});
  };

  test("render both links", () => {
    renderNavBar();

    expect(screen.getByText("Articles List")).toBeInTheDocument();
    expect(screen.getByText("New Article")).toBeInTheDocument();
  });
});