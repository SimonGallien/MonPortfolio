import { GithubIcon } from "./icons/GithubIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import { MailIcon } from "./icons/MailIcon";
import { TitreH2 } from "./TitreH2";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { MailTelIcon } from "./MailTelIcon";

export default function Footer() {

  const location = useLocation();

  // Vérifie si l'utilisateur est sur la page de contact
  const isContactPage = location.pathname === "/";

  return (
    <footer className="flex flex-col items-center justify-center">
      {isContactPage && (
          <div id="contact" className="lg:pb-16 justify-start items-start w-full">
            <TitreH2 titre="Me contacter" id="contact"/>
            <p className="text-3xl md:text-5xl mb-12">Ouvert aux nouvelles opportunités</p>
            <div className="flex justify-between w-full">
              <div className="flex flex-col gap-12">
                <p>
                  &ldquo;Discutons ensemble de vos projets.&ldquo; <span className="block mb-2"></span>
                  Vous recherchez un développeur passionné et impliqué pour concrétiser vos idées ? <span className="block mb-2"></span>
                  Contactez-moi, je serais ravi de collaborer avec vous.
                </p>
                <Link to="/contact" className="btn btn-primary rounded-3xl w-full flex items-center justify-center">
                  Contactez-moi
                  <MailIcon size={24}/>
                </Link>
                <MailTelIcon />
              </div>
              <img src="/images/contact_2.webp" className="hidden xl:block rounded-3xl h-60 object-cover" alt="communicateur_starWars"/>
            </div>
  
          </div>
      )}

      <div className="h-[1px] w-full border border-current rounded-full my-4"></div>
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center gap-2">Développé avec <img src="/images/icones/vitejs.svg" className="size-5" alt="iconVite"/> /<img src="/images/icones/react.svg" className="size-5" alt="iconReact"/> / <img src="/images/icones/tailwindcss-icon.svg" className="size-5" alt="iconTailwind"/> / <img src="/images/icones/daisyUI-icon.svg" className="size-5" alt="/iconDaisyUI"/></div>
        <div className="flex items-center gap-2">
            <a href="https://github.com/SimonGallien" className="btn btn-outline p-1 h-auto min-h-0 rounded-full">
                <GithubIcon size={16} className="text-foreground"/>
            </a>
            <a href="https://www.linkedin.com/in/simongallien/" className="btn btn-outline p-1 h-auto min-h-0 rounded-full">
                <LinkedinIcon size={16} className="text-foreground"/>
            </a>
        </div>
      </div>

    </footer>
  );
}