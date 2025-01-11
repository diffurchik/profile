import {Link} from "react-scroll";
import {useCallback, useState} from "react";
import {useLanguage} from "../Context.tsx";
import {translations} from "../Translates.tsx";

export const Menu: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const {language} = useLanguage();

    const menuItems = translations[language].menu;

    const toggleMenu = useCallback(() => {
        setIsMenuOpen((prev) => !prev);
    }, [])

    return (
        <header>
            <nav className={`menu ${isMenuOpen ? "open" : ""}`} style={{zIndex: 1000}}>
                <button className="hamburger" onClick={toggleMenu}>
                    <span className="bar" id='bar1'></span>
                    <span className="bar" id='bar2'></span>
                    <span className="bar" id='bar3'></span>
                </button>
                <ul className={`${isMenuOpen ? "visible" : ""}`}>
                    <li><Link to="home" smooth duration={500}>/ {menuItems.HOME}</Link></li>
                    <li><Link to="about" smooth duration={500} offset={-600}>/ {menuItems.ABOUT}</Link></li>
                    <li><Link to="contact" smooth duration={500}>/ {menuItems.CONTACT}</Link></li>
                </ul>
            </nav>
        </header>
    )
}