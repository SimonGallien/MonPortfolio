import { GithubIcon } from "./icons/GithubIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import Navigation from "./Navigation";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-base-200">
        <Navigation />
        <ul className="flex items-center gap-2">
            <a href="https://github.com/SimonGallien" className="btn btn-outline p-1 h-auto min-h-0 rounded-full">
                <GithubIcon size={16} className="text-foreground"/>
            </a>
            <a href="https://www.linkedin.com/in/simongallien/" className="btn btn-outline p-1 h-auto min-h-0 rounded-full">
                <LinkedinIcon size={16} className="text-foreground"/>
            </a>
        </ul>

        <ThemeSwitcher />
    </header>
  );
}

  