import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Cookies from "js-cookie";
import "./CookiesModal.scss";

const CookiesModal = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const ifAcepptedCookies = Cookies.get("acceptedCookies");

    if (ifAcepptedCookies) {
      setVisible(false);
    }
  }, []);

  const AcceptCookies = () => {
    Cookies.set("acceptedCookies", "true", { expires: 1 / 1440 });
    setVisible(false);
  };

  return (
    <motion.aside
      initial={{ opacity: 0, y: 300 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 300 }}
      id="cookies"
    >
      <p>
        Usamos cookies para melhorar sua experiência de navegação e fornecer
        conteúdo e anúncios personalizados. Ao clicar em "Aceitar", você
        concorda com o uso de cookies neste site. Você pode gerenciar suas
        preferências clicando em “Configurações de Cookies” ou saiba mais em
        nossa Política de Privacidade.
      </p>

      {visible && <button onClick={AcceptCookies}>Concordar e fechar</button>}
    </motion.aside>
  );
};

export default CookiesModal;
