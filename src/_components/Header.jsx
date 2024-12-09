import Navigation from "./Navigation";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-base-200">
        <Navigation />
        <ThemeSwitcher />
    </header>
  );
}

  