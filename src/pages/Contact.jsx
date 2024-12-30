import Footer from "../_components/Footer";
import Header from "../_components/Header";
import Formulaire from "../_components/Formulaire";


const Contact = () => {
  return (
    <>
        <div className="flex flex-col min-h-screen m-auto p-3 md:px-12">
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
