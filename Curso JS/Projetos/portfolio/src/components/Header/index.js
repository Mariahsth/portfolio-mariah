import { useCallback, useEffect, useRef, useState } from 'react';
import './Header.css'
import { FiMenu, FiX } from 'react-icons/fi';

export default function Header(){

    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = useCallback(() => setMenuOpen((prev) => !prev), []);
    const navRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (navRef.current && !navRef.current.contains(event.target) && menuOpen) {
            setMenuOpen(false);
          }
        };
    
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
      }, [menuOpen]);
    
    const handleNavClick = () => {
    if (window.innerWidth <= 455) {
        setMenuOpen(false);
    }
    };

    return(
        <header>
            <button className='menu_toggle' onClick={toggleMenu} aria-label="Abrir menu de navegação">
                {menuOpen ? <FiX /> : <FiMenu />}
            </button>
            <nav  >
                <p ><a className="logo" href="#home">&lt;M/H&gt;</a></p>
                <ul $isOpen={menuOpen} ref={navRef} className={`header_menu ${menuOpen ? 'open' : 'closed'}`}>
                    <li><a href="#home" onClick={handleNavClick}>Início</a></li>
                    <li><a href="#about" onClick={handleNavClick}>Sobre mim</a></li>
                    <li><a href="#tecnologies" onClick={handleNavClick}>Tecnologias</a></li>
                    <li><a href="#projects" onClick={handleNavClick}>Projetos</a></li>
                </ul>
            </nav>
        </header>
    )
}