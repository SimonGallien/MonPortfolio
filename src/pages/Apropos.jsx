import Header from "../_components/Header";
import Footer from "../_components/Footer";

export default function Apropos() {
    return (
        <>
          <div className="min-h-screen max-w-[1280px] w-full m-auto p-3 md:px-12">
            <Header />
            <p>
                Avec un diplôme d’ingénieur généraliste en poche, j’ai débuté ma carrière dans le domaine du sport automobile, 
                un environnement exigeant où j’ai appris la rigueur et la résolution de problèmes complexes. Malgré ma passion 
                pour cette industrie, j’ai ressenti le besoin de relever un nouveau défi, motivé par l’arrivée de ma fille et 
                mon désir d’évoluer vers un domaine qui m’a toujours fasciné : l’informatique. <br/>
                Aujourd’hui, je me consacre au développement web, où je combine méthodologie, apprentissage continu et plaisir 
                de créer. Ma soif d’apprendre m’amène à explorer des domaines complémentaires comme l’intelligence artificielle 
                et la cybersécurité, qui viendront enrichir mon profil et m’ouvrir de nouvelles opportunités.<br/><br/>
                Mon ambition ? Apporter mes compétences et ma passion pour la technologie à des projets ambitieux, tout en 
                continuant à apprendre et à repousser mes limites. Que ce soit en freelance ou en CDI, je cherche à collaborer 
                avec des équipes motivées sur des solutions impactantes.
            </p>

            <Footer />
          </div>
        </>
  
    );
  }