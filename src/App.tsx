import './App.css'
import {useEffect, useState} from "react";

function App() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
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
                <div className={`caption ${scrolled ? "scrolled" : ""}`}>
                    {scrolled ? (<>I am <br/>Anna</>) : (<>
                        Hello, <br/>
                        world!
                    </>)}
                </div>
                <div>
                    <img src={scrolled ? 'cartoon_photo.png' : 'icon.png'}
                         className={`photo ${scrolled ? 'photo-mask' : ''}`} alt={'photo of Anna'}/>
                </div>
                {/*<div className={'scroll-button'}>*/}
                {/*    <a href=""><span></span>Scroll</a>*/}
                {/*</div>*/}
            </div>
            <div style={{height: "120vh", padding: "20px"}}>
            </div>
        </div>
    )
}

export default App
