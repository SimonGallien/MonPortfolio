import Footer from "../_components/Footer";
import Header from "../_components/Header";
import Formulaire from "../_components/Formulaire";
import { Spacing } from "../_components/Spacing";

const Contact = () => {
  return (
    <>
        <div className="flex flex-col min-h-screen bg-base-200">
            <Header />
            <Spacing size="md" />
            {/* Contenu principal */}
            <main className="flex-grow">
                {/* Ton contenu de page ici */}
                <Formulaire />
            </main>
            <Spacing size="md" />
            <Footer />
        </div>
    </>

  );
};

export default Contact;
