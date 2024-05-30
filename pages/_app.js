import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/globals.css';
import '../styles/dashboard.css';
import '../styles/Sign-log-form.css';

import { SessionProvider } from 'next-auth/react';
import Modal from 'react-modal';
import Navigation from '../components/Navigation';
import { useState, useEffect } from 'react'; // Import useState and useEffect


function MyApp({ Component, pageProps }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  Modal.setAppElement('#__next');

  useEffect(() => {
    if (typeof document !== 'undefined') {
      require('bootstrap/dist/js/bootstrap');
    }
  }, []);

  return (
    <SessionProvider session={pageProps.session}>

      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
