import { DownloadIcon } from "./icons/DownloadIcon"

export const Hero = () => {
    return (
        <>
            <div className="hero bg-grid-fade">
                <div className="hero-content flex-col justify-between lg:flex-row-reverse">
                    <div className="flex-1">
                        <h1 className="text-5xl font-bold font-anta">Simon GALLIEN</h1>
                        <div className="py-4">Développeur WEB Full-stack</div>
                        <p className="py-4 text-justify">
                            Je suis à la recherche d'opportunités en freelance ou en CDI pour collaborer sur des projets innovants, où je pourrais mettre à profit mes compétences techniques et ma rigueur acquise dans le domaine de l'ingénierie.
                        </p>
                        <a className="btn btn-primary rounded-3xl" href="/CV_Simon Gallien.pdf" download>
                            <DownloadIcon size={16} className="text-foreground"/>
                            Télécharger mon CV
                        </a>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <img
                            src="/profil.jpg" 
                            className="max-w-sm rounded-full shadow-2xl" 
                        />
                    </div>

                </div>
            </div>
        </>
    )
}