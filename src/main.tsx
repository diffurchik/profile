import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App/>
        <div className="cursor">
            <div className="cursor__inner">
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                    <filter id="gooey">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"/>
                        <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="
					        1 0 0 0 0
					        0 1 0 0 0
					        0 0 1 0 0
					        0 0 0 20 -7"
                            result="gooey"
                        />
                        <feMorphology in="gooey" operator="dilate" radius="2" result="outline"/>
                        <feComposite in="outline" in2="gooey" operator="out" result="composite"/>
                    </filter>
                </defs>
            </svg>
        </div>
        <script src="js/gsap.min.js"></script>
        <script type="module" src="js/index.js"></script>
    </StrictMode>,
)
