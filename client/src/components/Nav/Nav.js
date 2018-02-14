import React from "react";

const Nav = () =>
  <nav className="navbar navbar-expand-sm bg-dark navbar-dark">

    <a className="navbar-brand" href="/">NYT Scrubber</a>

    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="/search">Search Articles</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/saved">Saved Articles</a>
      </li>
  
    </ul>
  </nav>
  ;

export default Nav;