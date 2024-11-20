import { FaSun, FaMoon } from 'react-icons/fa';
import { useState } from 'react';
import '../styles/Navigation.css';

function NavDesktop() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle('dark-mode', !isDarkMode); // Dodaje klasę do body dla globalnego stylu
    };

    return (
        <>
            <nav className={`menu ${isMobileMenuOpen ? 'open' : ''}`}>
                <ul>
                    <li><a href="index.html">Strona Główna</a></li>
                    <li><a href="galeria.html">Galeria</a></li>
                    <li><a href="gra.html">Gra</a></li>
                </ul>
                <div className="theme-toggle" onClick={toggleTheme}>
                    {isDarkMode ? <FaSun/> : <FaMoon/>}
                </div>
            </nav>
            <div className="hamburger" onClick={toggleMobileMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </>
    );
}

export default NavDesktop;