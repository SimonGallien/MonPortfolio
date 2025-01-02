import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <ul className="menu menu-horizontal gap-7 rounded-box p-0">
        <li><Link className="p-0" to={"/"}>Accueil</Link></li>
        <li><Link className="p-0" to={"/contact"}>Contact</Link></li>
        <li><Link className="p-0" to={"/propos"}>A propos</Link></li>
    </ul>
    )
}