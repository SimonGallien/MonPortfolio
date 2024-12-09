import PropTypes from "prop-types";

export const Spacing = ({size = "md"}) => {
    return (
        <div 
            className={
                size === "sm" 
                ? "h-8 lg:h-16"
                : size === "md"
                ? "h-16 lg:h-24"
                :"h-24 lg:h-32"
            }
        />
    )
}

// Validation des props avec PropTypes
Spacing.propTypes = {
    size: PropTypes.oneOf(["sm", "md", "lg"]), // La prop size doit être "sm", "md" ou "lg"
    className: PropTypes.string, // La prop className est une chaîne de caractères
  };