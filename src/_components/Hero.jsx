export const Hero = () => {
    return (
        <>
            <div className="flex w-full">
                <div className="flex-[2] flex flex-col gap-2 place-content-between">
                    <div>
                        <h1 className='text-5xl font-anta font-bold mb-2.5'>Simon GALLIEN</h1>
                        <h2 className="text-2xl font-bold mb-4">Développeur Web</h2>
                        <p>Je suis un ingénieur spécialisé dans la course automobile et passioné par les nouvelles technologies. <br />
                        Actuellement en formation chez OpenClassrooms dans le cursus de "Développeur Web".<br/>
                        Je suis à la recherche d'opportunités en freelance ou en CDI pour collaborer sur des projets innovants, où je pourrais mettre à profit mes compétences techniques et ma rigueur acquise dans le domaine de l'ingénierie.
                         </p>
                    </div>
                    <button className="btn w-full btn-accent font-anta text-2xl">Télécharger mon CV</button>
                </div>
                <div className="flex-1 flex justify-end w-full">
                    <img  
                        src="/profil.jpg" 
                        alt="monProfil" 
                        className="w-full h-auto rounded-full max-w-xs"
                    />
                </div>
            </div>
        </>
    )
}