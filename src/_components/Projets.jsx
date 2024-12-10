import { ProjetCard } from "./ProjetCard";
import BluelImage from '../images/SophieBluel_principal.png'
import KasaImage from '../images/kasa_principal.png'
import GrimoireImage from '../images/VieuxGrimoire.png'


export function Projets(){
    return (
        <>
        <div className="flex flex-col w-full place-content-between">
            <h2 className="text-2xl font-bold mb-4" id="projets">Sélection de projets</h2>
            <div className="flex w-full place-content-between">
                <ProjetCard image={BluelImage} titre='Portfolio de photographe'/>
                <ProjetCard image={KasaImage} titre="Site d'annonce immobilière"/>
                <ProjetCard image={GrimoireImage} titre="Site de notation de livres"/>
            </div>
        </div>
        </>

    )
}