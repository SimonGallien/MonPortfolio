import { useRef } from "react";
import emailjs from "emailjs-com";

const Formulaire = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
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
      <h1 className="text-2xl font-bold mb-4">Contactez-moi</h1>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="rounded"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-bold mb-2">
            Nom
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Votre nom"
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Votre email"
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-bold mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            placeholder="Votre message"
            className="w-full px-3 py-2 border rounded"
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-accent w-full rounded-full font-bold py-2 px-4"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default Formulaire;
