import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
        <li><Link to={"/"}>Accueil</Link></li>
        <li><Link to={"/contact"}>Contact</Link></li>
    </ul>
    )
}