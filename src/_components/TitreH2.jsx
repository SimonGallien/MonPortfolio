import PropTypes from 'prop-types'

export function TitreH2({titre, id}) {
    return (
        <>
            <h2 id={id} className="mb-4 badge badge-accent badge-outline">{titre}</h2>
        </>
    )
}

// Validation des props
TitreH2.propTypes = {
    titre: PropTypes.string.isRequired, // `titre` doit être une chaîne de caractères et est requis
    id: PropTypes.string,              // `id` doit être une chaîne de caractères, mais n'est pas obligatoire
  }; 