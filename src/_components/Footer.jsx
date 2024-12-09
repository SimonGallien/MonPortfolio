import { GithubIcon } from "./icons/GithubIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";

export default function Footer() {
  return (
    <footer className="flex items-center justify-center p-4 bg-base-200">
        <ul className="flex items-center gap-2">
            <a href="https://github.com/SimonGallien" className="btn btn-outline p-1 h-auto min-h-0 rounded-full">
                <GithubIcon size={16} className="text-foreground"/>
            </a>
            <a href="https://www.linkedin.com/in/simongallien/" className="btn btn-outline p-1 h-auto min-h-0 rounded-full">
                <LinkedinIcon size={16} className="text-foreground"/>
            </a>
        </ul>
    </footer>
  );
}