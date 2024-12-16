export default function Formulaire(){
    return(
        <>
        <form className="space-y-4 w-[672px] mx-auto bg-base-200 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4" id="contact" >Contactez-moi</h2>
            <p>Remplisser le formulaire ou envoyez moi un mail directement à simongallien@orange.fr</p>

            <div>
                <label to="name" className="label">
                    <span className="label-text">Nom</span>
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Votre nom"
                    className="input input-bordered w-full"
                    required
                />
            </div>

            <div>
                <label to="email" className="label">
                    <span className="label-text">Email</span>
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Votre email"
                    className="input input-bordered w-full"
                    required
                />
            </div>

            <div>
                <label to="message" className="label">
                    <span className="label-text">Message</span>
                </label>
                <textarea
                    id="message"
                    name="message"
                    placeholder="Votre message"
                    className="textarea textarea-bordered w-full"
                    rows="5"
                    required
                ></textarea>
            </div>

            <div className="text-center">
                <button type="submit" className="btn btn-accent w-full">
                Envoyer
                </button>
            </div>
        </form>
        </>

    )
}