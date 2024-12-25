import styles from './me.module.css'
import {useCallback, useRef, useState} from "react";
import {Developer} from "./Developer.tsx";
import {QA} from "./QA.tsx";

export const MePage: React.FC = () => {
    const [showQaSection, setShowQaSection] = useState<boolean>(false)
    const [showDevSection, setShowDevSection] = useState<boolean>(false)
    const containerRef = useRef<HTMLDivElement | null>(null);

    const showQaSectionHandler = useCallback(() => {
        setShowQaSection(true);
        setShowDevSection(false);
    }, []);

    const hideQaSectionHandler = useCallback(() => {
        setShowQaSection(false);
        setShowDevSection(false);
    }, [])

    const showDevSectionHandler = useCallback(() => {
        setShowQaSection(false);
        setShowDevSection(true);
    }, []);

    const hideDevSectionHandler = useCallback(() => {
        setShowQaSection(false);
        setShowDevSection(false);
    }, [])

    return (
        <div style={{position: 'absolute', top: '65vh', left: 0, width: '100%'}} onClick={hideQaSectionHandler}>
            <section className={styles.container} ref={containerRef}>
                <div style={{flex: 1, position: 'relative'}}>
                    <img src={'photo_2.png'} alt={'photo of Anna'}
                         style={{position: 'absolute', top: -190, right: 0,}}
                         className={showQaSection ? styles.image_visible : styles.image_hidden}/>
                    {showDevSection && <Developer positionTop={-160}/>}
                </div>
                <div style={{flex: 1}}>
                    <h1 onMouseEnter={showQaSectionHandler} onMouseLeave={hideQaSectionHandler}
                        className={styles.paragraph}><span>QA</span></h1>
                    <h1 onMouseEnter={showDevSectionHandler} onMouseLeave={hideDevSectionHandler}
                        className={styles.paragraph}><span>Developer</span></h1>
                </div>
                <div style={{flex: 1, position: 'relative'}}>
                    <img src={'icon_5.png'} alt={'photo of Anna'}
                         style={{position: 'absolute', top: -200, left: 0}}
                         className={showDevSection ? styles.image_visible : styles.image_hidden}/>
                    {showQaSection && <QA positionTop={-190}/>}
                </div>

            </section>
        </div>
    )
}