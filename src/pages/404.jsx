import { Link } from "react-router-dom"

const Error404 = () => {
    return(
        <>
                <img src="/images/404.webp" alt="Error 404" className="w-full h-96 object-cover py-4"/>
                <span className="py-4 w-full text-xl md:text-5xl text-current text-center flex justify-center items-center">Oups ! </span>
                <p className="py-4 w-full text-xl md:text-5xl text-current text-center flex justify-center items-center">La page que vous cherchez n&apos;existe pas</p>
                <Link to={"/"} className="link link-secondary text-xl md:text-3xl w-full text-center flex justify-center items-center">Retour à la page d&apos;accueil</Link>
        </>
    )
}

export default Error404