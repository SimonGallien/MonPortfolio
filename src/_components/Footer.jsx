import { GithubIcon } from "./icons/GithubIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import { MailIcon } from "./icons/mailIcon";
import { TitreH2 } from "./TitreH2";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center p-4 bg-base-200">
      <div id="contact" className="py-28 justify-start items-start w-[1280px]">
        <TitreH2 titre="Me contacter" id="contact"/>
        <p className="text-5xl mb-12">Ouvert aux nouvelles opportunités</p>
        <button className="btn btn-primary rounded-3xl">
          Contactez-moi
          <MailIcon size={24}/>
        </button>
      </div>
      <div className="h-[1px] w-[1280px] border border-current rounded-full my-4"></div>
      <div className="w-[1280px] flex justify-between items-center">
        <div>Développé avec REACT / TAILWIND / DAISYUI et hébergé sur Github</div>
        <ul className="flex items-center gap-2">
            <a href="https://github.com/SimonGallien" className="btn btn-outline p-1 h-auto min-h-0 rounded-full">
                <GithubIcon size={16} className="text-foreground"/>
            </a>
            <a href="https://www.linkedin.com/in/simongallien/" className="btn btn-outline p-1 h-auto min-h-0 rounded-full">
                <LinkedinIcon size={16} className="text-foreground"/>
            </a>
        </ul>
      </div>

    </footer>
  );
}