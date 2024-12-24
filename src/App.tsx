import './App.css'
import {useCallback, useEffect, useRef, useState} from "react";
import {MePage} from "./Pages/Me.tsx";
import {Contacts} from "./Pages/Contacts.tsx";

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
            if(window.scrollY > 500){
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
                <nav className="menu">
                    <ul>
                        <li><a href="#home">/ Home</a></li>
                        <li><a href="#about">/ About</a></li>
                        <li><a href="#contact">/ Contact</a></li>
                    </ul>
                </nav>
            </header>
            <div className={'container'}>
                <div ref={captionRef} className={`caption ${scrolled ? "scrolled" : ""}`}>
                    {scrolled ? (<>I am <br/>Anna</>) : (<>
                        Hello, <br/> world!
                    </>)}
                </div>
            </div>
            {showSecondPage && <MePage/>}
            {showContactsPage && <Contacts/>}
        </div>
    )
}

export default App
