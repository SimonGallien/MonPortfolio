import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export function Projets({ project }){
    return (
        <>
<Link to={`/projets/${project.id}`}>
    <article className="card bg-neutral w-full shadow-xl h-96 relative group">
        {/* Image principale */}
        <figure className="h-full relative">
            <img
                src={project.mainImage}
                alt={project.title}
                className="h-full object-cover w-full"
            />
        </figure>

        {/* Contenu toujours visible */}
        <div
            tabIndex={0}
            className="card-body absolute bg-info-content w-full bg-opacity-80 bottom-0 p-1"
        >
            <h2 className="block card-title text-center pt-4">{project.title}</h2>
            <div className="flex flex-wrap gap-4 justify-center py-4">
                {project.technologies.map((tech, index) => (
                    <div
                        key={index}
                        className="badge badge-base-content badge-outline p-4"
                    >
                        {tech}
                    </div>
                ))}
            </div>
        </div>

        {/* Contenu affiché au hover */}
        <div
            className="h-full w-full bg-black bg-opacity-70 absolute top-0 left-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 font-bold text-lg"
        >
            En savoir plus
        </div>
    </article>
</Link>

        </>
    )
}

Projets.propTypes = {
    project: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      contexte: PropTypes.string,
      objectifs: PropTypes.string,
      technologies: PropTypes.arrayOf(PropTypes.string),
      mainImage: PropTypes.string,
      gallery: PropTypes.arrayOf(PropTypes.string),
      githubLink: PropTypes.string
    }).isRequired
  };