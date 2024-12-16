import competences from "../data/competences.json"
import { TitreH2 } from "./TitreH2"

export function Competences(){
    return (
        <>
            <TitreH2 titre="Mes compétences" id="competences"/>
            <p className="text-5xl mb-12">J'aime travailler avec ...</p>
            <div className="grid grid-cols-6 gap-8">
                {competences.map((competence)=>(
                    <div key={competence.id} className="competence">
                        <div className="flex flex-col justify-center items-center">
                            <img src={competence.icone} alt="icone competence" className="h-14"/>
                            <div>{competence.competence}</div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}