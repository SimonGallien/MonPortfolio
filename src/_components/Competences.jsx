import { Spacing } from "./Spacing";

export function Competences(){
    return (
        <>
            <h2 className="text-2xl font-bold mb-4" id="competences">Mes compétences</h2>
            <p className="text-5xl mb-4">J'aime travailler avec ...</p>
            <div className="flex w-full flex-col lg:flex-row">
                <div className="card bg-base-300 rounded-box grid h-32 flex-grow place-items-center">HTML</div>
                <div className="divider lg:divider-horizontal" />
                <div className="card bg-base-300 rounded-box grid h-32 flex-grow place-items-center">CSS</div>
                <div className="divider lg:divider-horizontal" />
                <div className="card bg-base-300 rounded-box grid h-32 flex-grow place-items-center">Javascript</div>
            </div>
            <div className="flex w-full flex-col lg:flex-row mt-10">
                <div className="card bg-base-300 rounded-box grid h-32 flex-grow place-items-center">Sass</div>
                <div className="divider lg:divider-horizontal" />
                <div className="card bg-base-300 rounded-box grid h-32 flex-grow place-items-center">REACT</div>
                <div className="divider lg:divider-horizontal" />
                <div className="card bg-base-300 rounded-box grid h-32 flex-grow place-items-center">Tailwind</div>
            </div>
            <div className="flex w-full flex-col lg:flex-row mt-10">
                <div className="card bg-base-300 rounded-box grid h-32 flex-grow place-items-center">MongoDB</div>
                <div className="divider lg:divider-horizontal" />
                <div className="card bg-base-300 rounded-box grid h-32 flex-grow place-items-center">Node.js</div>
                <div className="divider lg:divider-horizontal" />
                <div className="card bg-base-300 rounded-box grid h-32 flex-grow place-items-center">Express</div>
            </div>
        </>
    )
}