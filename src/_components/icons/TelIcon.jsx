import PropTypes from "prop-types";

export const TelIcon = ({size = 24,...props}) => {
    return (
            <svg 
                fill="currentColor" 
                version="1.1" 
                id="Capa_1" 
                width={size}
                height={size}
                viewBox="0 0 891.024 891.024"
                {...props}
            >
            <g>
                <path d="M2.8,180.875c46.6,134,144.7,286.2,282.9,424.399c138.2,138.2,290.4,236.301,424.4,282.9c18.2,6.3,38.3,1.8,52-11.8
                    l92.7-92.7l21.6-21.6c19.5-19.5,19.5-51.2,0-70.7l-143.5-143.4c-19.5-19.5-51.2-19.5-70.7,0l-38.899,38.9
                    c-20.2,20.2-52.4,22.2-75,4.6c-44.7-34.8-89-73.899-131.9-116.8c-42.9-42.9-82-87.2-116.8-131.9c-17.601-22.6-15.601-54.7,4.6-75
                    l38.9-38.9c19.5-19.5,19.5-51.2,0-70.7l-143.5-143.5c-19.5-19.5-51.2-19.5-70.7,0l-21.6,21.6l-92.7,92.7
                    C1,142.575-3.5,162.675,2.8,180.875z"/>
            </g>
            </svg>
                )
            }
            
            // Validation des props avec PropTypes
            TelIcon.propTypes = {
              size: PropTypes.number, // La prop size doit être un nombre
              className: PropTypes.string, // La prop className est une chaîne de caractères
            };