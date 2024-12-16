import { DownloadIcon } from "./icons/DownloadIcon"

export const Hero = () => {
    return (
        <>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                    src="/profil.jpg" 
                    className="max-w-sm rounded-full shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Simon GALLIEN</h1>
                        <p className="py-6">
                            Je suis un ingénieur spécialisé dans la course automobile et passioné par les nouvelles technologies. <br />
                            Actuellement en formation chez OpenClassrooms dans le cursus de "Développeur Web".<br/>
                            Je suis à la recherche d'opportunités en freelance ou en CDI pour collaborer sur des projets innovants, où je pourrais mettre à profit mes compétences techniques et ma rigueur acquise dans le domaine de l'ingénierie.
                        </p>
                        <button className="btn btn-primary rounded-3xl">
                            <DownloadIcon size={16} className="text-foreground"/>
                            Télécharger mon CV
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}