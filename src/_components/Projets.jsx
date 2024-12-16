import projects from '../data/data.json';
import { TitreH2 } from './TitreH2';

export function Projets(){
    return (
        <>
        <div className="flex flex-col w-full place-content-between">
            <TitreH2 titre="Portfolio" id="projets"/>

            <div className="grid grid-cols-2 gap-12">
                {projects.map((project) => (
                    <div key={project.id} className="project">
                        <div className="card bg-base-100 w-full shadow-xl h-full">
                            <figure>
                                <img
                                src={`/src/assets/images/${project.mainImage}`}
                                alt={project.title}
                                className='h-80 object-cover w-full' />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                {project.title}
                                </h2>
                                <div className='flex gap-1'>
                                    {project.technologies.map((tech, index) => (
                                    <div key={index} className="badge badge-primary badge-outline">{tech}</div>
                                    ))}
                                </div>
                              
                                <p>{project.description}</p>
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