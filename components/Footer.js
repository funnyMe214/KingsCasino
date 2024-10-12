// components/Footer.js

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-auto" id="footer">
      <p>
        Follow us on 
        <a href="https://www.facebook.com/KiingTreasure" target="_blank" rel="noopener noreferrer" className="text-white"> Facebook</a>, 
        <a href="#" target="_blank" rel="noopener noreferrer" className="text-white"> Twitter</a>, 
        <a href="#" target="_blank" rel="noopener noreferrer" className="text-white"> Instagram</a>
      </p>
      <p>
        <a href="/privacy-policy" className="text-white">Privacy Policy</a>
      </p>
    </footer>
  );
};

export default Footer;
