import { DownloadIcon } from "./icons/DownloadIcon"

export const Hero = () => {
    return (
        <>
            <section className="hero bg-grid-fade p-0">
                <article className="hero-content flex-col justify-between lg:flex-row-reverse p-0">
                    <div className="flex-1">
                        <h1 className="text-4xl md:text-5xl font-bold font-anta">Simon GALLIEN</h1>
                        <div className="pb-4 text-2xl font-bold">Développeur WEB</div>
                        <p className="pb-6 text-justify">
                            Je suis à la recherche d&apos;opportunités en freelance ou en CDI pour collaborer sur des projets innovants, où je pourrais mettre à profit mes compétences techniques et ma rigueur acquise dans le domaine de l&apos;ingénierie.
                        </p>
                        <a className="btn btn-primary rounded-3xl w-full" href="/CV_Simon Gallien.pdf" download>
                            <DownloadIcon size={16} className="text-foreground"/>
                            Télécharger mon CV
                        </a>
                    </div>
                    <div className="aspect-w-1 aspect-h-1 w-full max-w-sm">
                        <img
                            src="/profil.webp"
                            className="rounded-full shadow-2xl object-cover"
                            alt="Simon Gallien, profil"
                        />
                    </div>

                </article>
            </section>
        </>
    )
}