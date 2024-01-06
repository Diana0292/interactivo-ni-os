import {Link } from "react-router-dom";
import "./Footer.css";

export const Footer = () =>{
    return (
        <footer className="footer">
            <h3 className="momentos">momentos del dia</h3>
            <ul className="footer-lista">
                <li>
                    <Link>inicio</Link>
                </li>
                <li>
                    <Link>Mi Lista</Link>
                </li>
                <li>
                    <Link>Perfil</Link>
                </li>
            </ul>
        </footer>
    )
}
