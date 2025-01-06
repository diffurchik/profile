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

    const changeOpacity = useCallback((opacity: number, zIndex: number) => {
        if (captionRef.current) {
            captionRef.current.style.opacity = opacity.toString();
            captionRef.current.style.zIndex = zIndex.toString();
        }
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
            if (window.scrollY > 300) {
                setShowSecondPage(true);
            } else {
                setShowSecondPage(false);
            }
            if (window.scrollY > 500) {
                setShowContactsPage(true);
            } else {
                setShowContactsPage(false);
            }
            if (window.scrollY < 350) {
                changeOpacity(1, 10)
            }
            if (window.scrollY > 310) {
                changeOpacity(0, -1)
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

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
