import './App.css'
import {useCallback, useEffect, useRef, useState} from "react";
import {Link, Element} from 'react-scroll';
import {MePage} from "./Components/Me.tsx";
import {Contacts} from "./Components/Contacts.tsx";
import GooeyCursor from "./Components/GooeyCursor.tsx";

function App() {
    const [scrolled, setScrolled] = useState<boolean>(false);
    const [showSecondPage, setShowSecondPage] = useState<boolean>(false);
    const [showContactsPage, setShowContactsPage] = useState<boolean>(false);
    const captionRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);

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

        console.log(isMobile);

        const handleScroll = () => {
            const currentScroll = window.scrollY;

            if(isMobile){
                console.log(currentScroll);
                setScrolled(currentScroll > 25);
                setShowSecondPage(currentScroll > 125);
                setShowContactsPage(currentScroll > 200);
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
        };

        window.addEventListener("scroll", handleScroll, { passive: false });

        return () => {
            window.removeEventListener("scroll", handleScroll);
            mediaQuery.removeEventListener("change", handleMediaChange)
        };
    }, [isMobile]);

    return (
        <div className={'grid'}>
            <header>
                <nav className="menu" style={{zIndex: 1000}}>
                    <ul>
                        <li><Link to="home" smooth duration={500}>/ Home</Link></li>
                        <li><Link to="about" smooth duration={500} offset={-600}>/ About</Link></li>
                        <li><Link to="contact" smooth duration={500}>/ Contact</Link></li>
                    </ul>
                </nav>
            </header>
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
                    <MePage/>
                </div>
            </Element>
            <Element name="contact" id={'contact'}>
                <div style={{opacity: showContactsPage ? 1 : 0, transition: 'opacity 1s ease-in-out', visibility: showContactsPage ? "visible" : "hidden"}}>
                    <Contacts/>
                </div>
            </Element>
            <GooeyCursor />
        </div>
    )
}

export default App
