import { ProjetCard } from "./ProjetCard";

export function Projets(){
    return (
        <>
        <div className="flex flex-col w-full place-content-between">
            <h2 className="text-2xl font-bold mb-4">Sélection de projets</h2>
            <div className="flex w-full place-content-between">
                <ProjetCard/>
                <ProjetCard/>
                <ProjetCard/>
            </div>
        </div>
        </>

    )
}