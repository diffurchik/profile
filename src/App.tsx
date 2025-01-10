import './App.css'
import {useCallback, useEffect, useRef, useState} from "react";
import {Link, Element} from 'react-scroll';
import {MePage} from "./Components/Me.tsx";
import {Contacts} from "./Components/Contacts.tsx";
import GooeyCursor from "./Components/GooeyCursor.tsx";
import {MeMobilePage} from "./Components/MeMobile.tsx";

function App() {
    const [scrolled, setScrolled] = useState<boolean>(false);
    const [showSecondPage, setShowSecondPage] = useState<boolean>(false);
    const [showContactsPage, setShowContactsPage] = useState<boolean>(false);
    const captionRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = useCallback(() => {
        setIsMenuOpen((prev) => !prev);
    }, [])

    const changeOpacity = useCallback((opacity: number, zIndex: number) => {
        if (captionRef.current) {
            captionRef.current.style.opacity = opacity.toString();
            captionRef.current.style.zIndex = zIndex.toString();
        }
    }, [])

    useEffect(() => {

        const mediaQuery = window.matchMedia("(max-width: 768px)");
        setIsMobile(mediaQuery.matches);

        const handleMediaChange = (event: MediaQueryListEvent) => {
            setIsMobile(event.matches);
        };

        const handleScroll = () => {
            const currentScroll = window.scrollY;

            if (isMobile) {
                setScrolled(currentScroll > 25);
                setShowSecondPage(currentScroll > 120);
                setShowContactsPage(currentScroll > 300);
            } else {
                setScrolled(currentScroll > 10);
                setShowSecondPage(currentScroll > 300);
                setShowContactsPage(currentScroll > 500);
            }

            if (currentScroll < 350) {
                changeOpacity(1, 10)
            }
            if (currentScroll > 310) {
                changeOpacity(0, -1)
            }

            if (isMobile && currentScroll > 150) {
                changeOpacity(0, -1)
            }
        };

        window.addEventListener("scroll", handleScroll, {passive: false});

        return () => {
            window.removeEventListener("scroll", handleScroll);
            mediaQuery.removeEventListener("change", handleMediaChange)
        };
    }, [isMobile, changeOpacity]);

    return (
        <div className={'grid'}>
            <header>
                <nav className={`menu ${isMenuOpen ? "open" : ""}`} style={{zIndex: 1000}}>
                    <button className="hamburger" onClick={toggleMenu}>
                        <span className="bar" id='bar1'></span>
                        <span className="bar" id='bar2'></span>
                        <span className="bar" id='bar3'></span>
                    </button>
                    <ul className={`${isMenuOpen ? "visible" : ""}`}>
                        <li><Link to="home" smooth duration={500}>/ Home</Link></li>
                        <li><Link to="about" smooth duration={500} offset={-600}>/ About</Link></li>
                        <li><Link to="contact" smooth duration={500}>/ Contact</Link></li>
                    </ul>
                </nav>
            </header>
            {isMobile && <div className="scroll-indicator">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>}
            <Element name="home">
                <div className={'container'}>
                    <div ref={captionRef} className={`caption ${scrolled ? "scrolled" : ""}`}>
                        {scrolled ? (<>I am <br/>Anna</>) : (<>
                            Hello, <br/> world!
                        </>)}
                    </div>
                </div>
            </Element>
            <Element name="about">
                <div style={{display: showSecondPage ? "block" : "none"}} id='about'>
                    {isMobile ? <MeMobilePage/> : <MePage/>}
                </div>
            </Element>
            <Element name="contact" id={'contact'}>
                <div style={{
                    opacity: showContactsPage ? 1 : 0,
                    transition: 'opacity 1s ease-in-out',
                    visibility: showContactsPage ? "visible" : "hidden"
                }}>
                    <Contacts/>
                </div>
            </Element>
            <GooeyCursor/>
        </div>
    )
}

export default App
