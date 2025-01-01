import Carousel from "../_components/Carousel";
import { GithubIcon } from "../_components/icons/GithubIcon";
import projets from "../data/data.json"
import { Navigate, useParams } from 'react-router-dom';

export default function ProjetDetail() {

    const { id } = useParams();
    // Trouver le projet correspondant
    const projet = projets.find((projet) => projet.id === parseInt(id, 10));
  
    if (!projet) {
      return <Navigate to="/404" replace />;
    }

    return (
        <>
        <div className="min-h-screen max-w-[1280px] w-full m-auto p-3 md:px-12">
            <div key={projet.id} className="mb-28 w-full">
                <h1 className="text-2xl lg:text-4xl xl:text-5xl text-accent w-full text-center mt-12 mb-8">{projet.title}</h1>
                <div className="flex justify-center w-full mb-4">
                    {projet.technologies.map((tech, index) => (
                        <div key={index} className="badge badge-primary badge-outline mx-1">{tech}</div>
                    ))}
                </div>
                <div className="flex justify-center mb-12 min-h-0">
                    <a href={projet.githubLink} className="btn min-h-0 h-auto btn-warning text-xs px-2 py-1 rounded-full">
                        <GithubIcon size={16}/>
                        Dépot Github
                    </a>
                </div>
                <Carousel pictures={projet.gallery}/>
                <h2 className="text-xl lg:text-2xl mb-3 text-accent">Description du projet</h2>
                <p className="text-justify">{projet.description}</p>
                <h2 className="text-xl lg:text-2xl mb-3 mt-7 text-accent">Contexte du projet</h2>
                <p className="text-justify">{projet.contexte}</p>
                <h2 className="text-xl lg:text-2xl mb-3 mt-7 text-accent">Objectifs</h2>
                <ul>{projet.objectifs.map((objectif, index)=>(
                    <li key={index}>• {objectif}</li>
                ))}</ul>
            </div>
        </div>
        </>
    )
}