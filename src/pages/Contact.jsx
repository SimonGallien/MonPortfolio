import Formulaire from "../_components/Formulaire";


const Contact = () => {
  return (
        <div className="max-w-[672px] h-full w-full flex flex-col justify-around items-center flex-1 mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4 text-accent">Contactez-moi</h1>
          <p className="text-base md:text-xl mb-2 md:mb-7 text-justify">Que ce soit pour une question, 
            une opportunité professionnelle ou un projet à concrétiser, je serais ravi d&lsquo;échanger avec vous. 
            N&lsquo;hésitez pas à me contacter pour que nous discutions de votre idée ou de notre future collaboration.</p>
                <Formulaire /> 
        </div>
  );
};

export default Contact;
