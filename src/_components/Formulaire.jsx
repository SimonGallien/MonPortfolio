import { useRef } from "react";
import emailjs from "emailjs-com";

const Formulaire = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.name.value.trim();
    const email = form.current.email.value.trim();
    const message = form.current.message.value.trim();

    const lastSubmit = localStorage.getItem("lastSubmit");
    const now = Date.now();

    if (lastSubmit && now - lastSubmit < 30000) { // 30 secondes
      alert("Veuillez attendre avant de soumettre à nouveau.");
      return;
    }

    localStorage.setItem("lastSubmit", now);

    if (!name || !email || !message) {
      alert("Tous les champs sont obligatoires !");
      return;
    }

    if (!/^[a-zA-Z\s]+$/.test(name)) {
      alert("Le nom contient des caractères non valides !");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Adresse email invalide !");
      return;
    }

    if (message.length > 1000) {
      alert("Le message est trop long !");
      return;
    }

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
      <h1 className="text-4xl md:text-5xl font-bold mb-1 md:mb-4 text-accent">Contactez-moi</h1>
      <p className="text-base md:text-xl mb-1 md:mb-7 text-justify">Que ce soit pour une question, une opportunité professionnelle ou un projet à concrétiser, je serais ravi d&lsquo;échanger avec vous. 
        N&lsquo;hésitez pas à me contacter pour que nous discutions de votre idée ou de notre future collaboration.</p>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="rounded"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-bold mb-2">
            Nom<span className="text-accent"> *</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Votre nom"
            className="w-full px-3 py-2 border border-current rounded bg-base-200 "
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-bold mb-2">
            Email<span className="text-accent"> *</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Votre email"
            className="w-full px-3 py-2 border border-current rounded bg-base-200"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-bold mb-2">
            Message<span className="text-accent"> *</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            placeholder="Votre message"
            className="w-full px-3 py-2 border border-current rounded bg-base-200"
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
