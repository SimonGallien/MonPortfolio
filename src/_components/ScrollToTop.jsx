import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Définit le scroll en haut de la page
    }, [pathname]);

    return null; // Aucun rendu n'est nécessaire
};

export default ScrollToTop;
