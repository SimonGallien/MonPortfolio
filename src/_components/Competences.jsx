export function Competences(){
    return (
        <>
            <h2 className="text-2xl font-bold mb-4">Mes compétences</h2>
            <p className="text-5xl mb-4">J'aime travailler avec ...</p>
            <div className="flex w-full flex-col lg:flex-row">
                <div className="card bg-base-300 rounded-box grid h-32 flex-grow place-items-center">REACT</div>
                <div className="divider lg:divider-horizontal" />
                <div className="card bg-base-300 rounded-box grid h-32 flex-grow place-items-center">TAILWIND</div>
                <div className="divider lg:divider-horizontal" />
                <div className="card bg-base-300 rounded-box grid h-32 flex-grow place-items-center">NODE.JS</div>
            </div>
        </>
    )
}