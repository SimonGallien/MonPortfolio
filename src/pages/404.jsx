import Header from "../_components/Header"

const Error404 = () => {
    return(
        <>
            <Header />
            <img src="/images/404.webp" alt="Error 404" className="w-full h-96 object-cover"/>
            <p className="py-8 w-full text-5xl text-current text-center flex justify-center items-center">Erreur 404 <br/> Cette page n'existe pas ou n'a pas été trouvé</p>
        </>
    )
}

export default Error404