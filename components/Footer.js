// components/Footer.js
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-auto" id="footer">
      <p>
        Follow us on 
        <Link href="https://www.facebook.com/KiingTreasure" passHref>
          <span className="text-white"> Facebook</span>
        </Link>, 
        <Link href="#" passHref>
          <span className="text-white"> Twitter</span>
        </Link>, 
        <Link href="#" passHref>
          <span className="text-white"> Instagram</span>
        </Link>
      </p>
      <p>
        <Link href="/privacy-policy" passHref>
          <span className="text-white">Privacy Policy</span>
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
