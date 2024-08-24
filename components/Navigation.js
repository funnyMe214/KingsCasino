// components/Navigation.js
import Link from 'next/link';

const Navigation = ({ isLoggedIn, handleLogout }) => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
        <Link href="/" className="navbar-brand">
          <h2>Kings Casino</h2>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item mx-2">
              <Link href="/offers" className="nav-link">Offers</Link>
            </li>
            <li className="nav-item mx-2">
              <Link href="/refer-a-player" className="nav-link">Refer a Player</Link>
            </li>
            <li className="nav-item mx-2">
              <Link href="/referred-by-a-player" className="nav-link">Referred by a Player</Link>
            </li>
            <li className="nav-item mx-2">
              <Link href="/about-us" className="nav-link">About Us</Link>
            </li>
            {isLoggedIn ? (
              <>
                <li className="nav-item mx-2">
                  <Link href="/dashboard" className="nav-link">Dashboard</Link>
                </li>
                <li className="nav-item mx-2">
                  <button className="nav-link btn" onClick={handleLogout}>Sign Out</button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item mx-2">
                  <Link href="/signup" className="nav-link">Sign Up</Link>
                </li>
                <li className="nav-item mx-2">
                  <Link href="/login" className="nav-link">Log In</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
