import { GithubIcon } from "./icons/GithubIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import Navigation from "./Navigation";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="w-[1280px] m-auto flex items-center justify-between">
        <Navigation />
        <div className="flex items-center">
          <div className="flex items-center gap-2">
              <a href="https://github.com/SimonGallien" className="btn btn-outline p-1 h-auto min-h-0 rounded-full">
                  <GithubIcon size={16} className="text-foreground"/>
              </a>
              <a href="https://www.linkedin.com/in/simongallien/" className="btn btn-outline p-1 h-auto min-h-0 rounded-full">
                  <LinkedinIcon size={16} className="text-foreground"/>
              </a>
          </div>
          <div className="w-[1px] h-6 border border-current mx-2"></div>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}

  