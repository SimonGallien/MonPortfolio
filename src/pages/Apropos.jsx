import { DownloadIcon } from "../_components/icons/DownloadIcon"

export default function Apropos() {

        return (
            <>
                <section className="hero bg-grid-fade p-0 flex justify-center flex-1">
                    <article className="hero-content flex flex-col justify-between lg:flex-row-reverse p-0">
                        <div className="flex-1">
                            <h1 className="text-3xl md:text-4xl font-bold mb-4">A propos</h1>
                            <p className="pb-6 text-justify">
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
                            <a className="btn btn-primary rounded-3xl w-full mb-4" href="/CV_Simon Gallien.pdf" download>
                                <DownloadIcon size={16} className="text-foreground"/>
                                Télécharger mon CV
                            </a>
                        </div>
                        <div className="flex-1 flex justify-center">
                            <img
                                src="/profil.webp"
                                className="shadow-2xl object-cover"
                                alt="Simon Gallien, profil"
                            />
                        </div>
                    </article>
                    
                </section>
            </>
        )
  }