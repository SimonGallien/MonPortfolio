import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <ul className="menu menu-vertical lg:menu-horizontal rounded-box">
        <li><Link to={"/"}>Accueil</Link></li>
        <li><Link to={"/contact"}>Contact</Link></li>
    </ul>
    )
}