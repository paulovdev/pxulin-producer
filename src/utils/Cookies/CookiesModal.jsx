import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Cookies from 'js-cookie';
import './CookiesModal.scss';


const CookiesModal = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const ifAcepptedCookies = Cookies.get('acceptedCookies');

    if (ifAcepptedCookies) {
      setVisible(false);
    }
  }, []);

  const AcceptCookies = () => {
    Cookies.set('acceptedCookies', 'true', { expires: 1 / 1440 });
    setVisible(false);
  };

  return (
    <motion.aside
      initial={{ opacity: 0, y: 300 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 300 }}
      id='cookies'>
      <p>We use cookies to enhance your browsing experience and provide personalized content and ads. By clicking "Accept," you agree to the use of cookies on this site. You can manage your preferences by clicking "Cookie Settings" or learn more in our Privacy Policy.
      </p>

      {visible && (
        <button onClick={AcceptCookies}>Accept</button>
      )}
    </motion.aside>
  );
}

export default CookiesModal;
