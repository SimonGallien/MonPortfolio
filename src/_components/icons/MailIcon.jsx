import PropTypes from "prop-types";

export const MailIcon = ({size = 24,...props}) => {
    return (


<svg 
width={size} 
height={size}  
viewBox="0 0 24 24" 
fill="none" 
xmlns="http://www.w3.org/2000/svg"
{...props}>

<path 
d="M6 12H18M18 12L13 7M18 12L13 17" 
stroke="#000000" 

/>
</svg>
    )
}

// Validation des props avec PropTypes
MailIcon.propTypes = {
  size: PropTypes.number, // La prop size doit être un nombre
  className: PropTypes.string, // La prop className est une chaîne de caractères
};