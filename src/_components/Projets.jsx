import projects from '../data/data.json';
import { TitreH2 } from './TitreH2';

export function Projets(){
    return (
        <>
        <div className="flex flex-col w-full place-content-between">
            <TitreH2 titre="Portfolio" id="projets"/>
            <p className="text-5xl mb-12">Sélection de projets</p>
            <div className="grid grid-cols-2 gap-12">
                {projects.map((project) => (
                    <div key={project.id} className="project">
                        <div className="card bg-neutral w-full shadow-xl h-full">
                            <figure>
                                <img
                                src={`/src/assets/images/${project.mainImage}`}
                                alt={project.title}
                                className='h-60 object-cover w-full' />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                {project.title}
                                </h2>
                                <div className='flex flex-wrap gap-1'>
                                    {project.technologies.map((tech, index) => (
                                    <div key={index} className="badge badge-primary badge-outline">{tech}</div>
                                    ))}
                                </div>
                              
                                <p className='text-justify'>{project.description}</p>
                                <a role="button" className="btn btn-outline" href={project.githubLink}>Voir sur GitHub</a>
                            </div>
                        </div>
                    </div>
                ))}
            
            </div>
        </div>
        </>

    )
}