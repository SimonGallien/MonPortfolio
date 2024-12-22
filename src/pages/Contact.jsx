import Footer from "../_components/Footer";
import Header from "../_components/Header";
import Formulaire from "../_components/Formulaire";


const Contact = () => {
  return (
    <>
        <div className="flex flex-col min-h-screen bg-base-200">
            <Header />

            {/* Contenu principal */}
            <main className="flex-grow flex items-center">
                {/* Ton contenu de page ici */}
                <Formulaire />
            </main>

            <Footer />
        </div>
    </>

  );
};

export default Contact;
