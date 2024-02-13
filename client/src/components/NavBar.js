import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <Link to="/">Articles List</Link>
      {" | "}
      <Link to="/new">New Article</Link>
    </nav>
  );
}

export default NavBar;
