import competences from "../data/competences.json"
import { TitreH2 } from "./TitreH2"

export function Competences(){
    return (
        <>
        <div className="bg-grid-fade">
            <TitreH2 titre="Mes compétences" id="competences"/>
            <p className="text-3xl md:text-5xl mb-12">J&lsquo;aime travailler avec ...</p>
            
                <div className="flex justify-around items-center mb-12">
                    <div>
                        <img src="images/icones/react.svg" alt="icone competence" className="h-20"/>
                        <div className="mt-2 text-center">REACT.JS</div>
                    </div>
                    <div>
                        <img src="images/icones/tailwindcss-icon.svg" alt="icone competence" className="h-20"/>
                        <div className="mt-2 text-center">TAILWIND</div>
                    </div>
                    <div>
                        <img src="images/icones/nodejs-icon.svg" alt="icone competence" className="h-20"/>
                        <div className="mt-2 text-center">NODE.JS</div>
                    </div>
                </div>
                <p className="text-3xl mb-12">Et d&lsquo;autres...</p>
                <div className="grid grid-cols-3 lg:grid-cols-6  gap-12">
                    {competences.map((competence)=>(
                        <div key={competence.id} className="competence">
                           <div className="flex flex-col justify-center items-center">
                                <img src={competence.icone} alt="icone competence" className="h-14"/>
                                <div className="mt-2 text-center">{competence.competence}</div>
                            </div>
                        </div>
                    ))}
                    <div className="flex flex-col justify-center items-center">
                      
                        <div className="mt-1">EXPRESS</div>
                    </div>
                </div>
            </div>
        </>
    )
}