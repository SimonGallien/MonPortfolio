import emailjs from "emailjs-com";
import { useState, useEffect } from "react";
import validator from 'validator'

const Formulaire = () => {

  const [name, setName] = useState("")
  const [nameError, setNameError] = useState(false)

  const [mail, setMail] = useState("")
  const [mailError, setMailError] = useState(false)

  const [message, setMessage] = useState("")
  const [messageError, setMessageError] = useState(false)

  const [validForm, setValidForm] = useState(false) // On valide le formulaire seulement si le nom, le mail et le message sont correct

  // Met à jour validForm en fonction des erreurs
  useEffect(() => {
    setValidForm(!nameError && !mailError && !messageError && name && mail && message);
  }, [nameError, mailError, messageError, name, mail, message]);

  const handleNameChange = (e) => {
    const value = e.target.value
    setName(value)
    validateName(value)
  }

  const handleMailChange = (e) => {
    const value = e.target.value
    setMail(value)
    validateMail(value)
  }

  const handleMessageChange = (e) => {
    const value = e.target.value
    setMessage(value)
    validateMessage(value)
  }
  
  const validateName = (value) => {
    // Regex: autorise uniquement les lettres, les espaces et les tirets, les chiffres et accents
    const regex = /^[a-zA-ZÀ-ÿ0-9\s-]+$/;
    if (!regex.test(value)) {
      setNameError(true)
    } else {
      setNameError(false)
    }
  }

  const validateMail = (value) => {
    setMailError(!validator.isEmail(value));
  };

  const validateMessage = (value) => {
    // Regex: autorise uniquement les lettres, les espaces et les tirets, les chiffres et accents
    const regex = /^[^<>]+$/;
    if (!regex.test(value)) {
      setMessageError(true)
    } else {
      setMessageError(false)
    }
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      
      .then(
        (result) => {
          console.log("Message envoyé :", result.text);
          alert("Votre message a été envoyé avec succès !");
        },
        (error) => {
          console.error("Erreur :", error.text);
          alert("Une erreur est survenue, veuillez réessayer.");
        }
      );
  };

  return (
    <div className="w-[672px] mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-1 md:mb-4 text-accent">Contactez-moi</h1>
      <p className="text-base md:text-xl mb-1 md:mb-7 text-justify">Que ce soit pour une question, une opportunité professionnelle ou un projet à concrétiser, je serais ravi d&lsquo;échanger avec vous. 
        N&lsquo;hésitez pas à me contacter pour que nous discutions de votre idée ou de notre future collaboration.</p>
      <form
        onSubmit={sendEmail}
        className="rounded"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-bold mb-2">
            Nom<span className="text-accent"> *</span><span className={`text-error ${nameError ? "" : "hidden"}`} >  ( Le nom ne doit pas contenir de caractères spéciaux. )</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Votre nom"
            className="w-full px-3 py-2 border border-current rounded bg-base-100"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-bold mb-2">
            Email<span className="text-accent"> *</span><span className={`text-error ${mailError ? "" : "hidden"}`} >  ( Le format de l&apos;email n&apos;est pas correct )</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Votre email"
            className="w-full px-3 py-2 border border-current rounded bg-base-100"
            value={mail}
            onChange={handleMailChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-bold mb-2">
            Message<span className="text-accent"> *</span><span className={`text-error ${messageError ? "" : "hidden"}`} >  ( Le message ne doit pas contenir de caractères spéciaux. )</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            placeholder="Votre message"
            className="w-full px-3 py-2 border border-current rounded bg-base-100"
            rows="4"
            value={message}
            onChange={handleMessageChange}
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-accent w-full rounded-full font-bold py-2 px-4"
          disabled={!validForm}
        >
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default Formulaire;
