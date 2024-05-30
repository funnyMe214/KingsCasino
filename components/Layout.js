// components/Layout.js
import { useState, useEffect } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

const Layout = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = sessionStorage.getItem('user');
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('user');
    setIsLoggedIn(false);
  };

  return (
    <>
      <Navigation isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
