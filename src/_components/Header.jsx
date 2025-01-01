import { GithubIcon } from "./icons/GithubIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import Navigation from "./Navigation";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Header() {
  return (
    <header className="max-w-[1280px] w-full m-auto flex items-center justify-between mt-4">
      <Navigation />
      <div className="flex items-center">
        <div className="flex items-center gap-2">
            <a href="https://github.com/SimonGallien" className="btn btn-outline p-1 h-auto min-h-0 rounded-full" aria-label="Voir mon profil GitHub">
                <GithubIcon size={16} className="text-foreground" aria-hidden="true"/>
            </a>
            <a href="https://www.linkedin.com/in/simongallien/" className="btn btn-outline p-1 h-auto min-h-0 rounded-full" aria-label="Voir mon profil Linkedin">
                <LinkedinIcon size={16} className="text-foreground" aria-hidden="true"/>
            </a>
        </div>
        <div className="w-[1px] h-6 border border-current mx-2"></div>
        <ThemeSwitcher aria-hidden="true"/>
      </div>
    </header>
  );
}

  