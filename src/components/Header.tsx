import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">MovieHub.com</div>
      <nav className="header__nav">
        <ul>
          <li>
            <Link to="/movies">Home</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
          <li>
            <Link to="/watchlist">Watch List</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
