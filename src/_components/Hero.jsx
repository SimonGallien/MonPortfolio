export const Hero = () => {
    return (
        <>
            <div className="flex">
                <div className="flex-[2] flex flex-col gap-2">
                    <h1 className='text-5xl font-bold'>Simon GALLIEN</h1>
                    <h2 className="text-3xl">Développeur Web</h2>
                    <p>Actuellement en formation chez OpenClassrooms</p>
                    <button className="btn w-3/4">Télécharger mon CV</button>
                </div>
                <div className="flex-1">
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