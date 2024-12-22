import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export function Projets({ project }){
    return (
        <>
            <Link to={`/projets/${project.id}`}>
                <div className="card bg-neutral w-full shadow-xl h-full">
                    <figure>
                        <img
                        src={`/src/assets/images/${project.mainImage}`}
                        alt={project.title}
                        className='h-60 object-cover w-full' />
                    </figure>

                    <div tabIndex={0} className="card-body">
                        <h2 className="card-title">
                        {project.title}
                        </h2>
                        <div className='flex flex-wrap gap-1'>
                            {project.technologies.map((tech, index) => (
                            <div key={index} className="badge badge-primary badge-outline">{tech}</div>
                            ))}
                        </div>
                    </div>
                </div>
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