import Carousel from "../_components/Carousel";
import Footer from "../_components/Footer";
import Header from "../_components/Header";
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
            <Header />
            <div key={projet.id} className="w-[1280px] m-auto mb-28">
                <h1 className="text-5xl text-accent w-full text-center mt-12 mb-8">{projet.title}</h1>
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
                <h2 className="text-2xl my-7 text-accent">Description du projet</h2>
                <p>{projet.description}</p>
                <h2 className="text-2xl my-7 text-accent">Contexte du projet</h2>
                <p>{projet.contexte}</p>
                <h2 className="text-2xl my-7 text-accent">Objectifs</h2>
                <p>{projet.objectifs}</p>
            </div>
            <Footer />
        </>
    )
}