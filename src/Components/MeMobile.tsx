import styles from './styles/me-mobile.module.css'
import {useCallback, useState} from "react";
import {MeMobileModal} from "./MeMobileModal.tsx";

export const MeMobilePage: React.FC = () => {
    const [showSection, setShowSection] = useState<boolean>(false)
    const [sectionName, setSectionName] = useState<string>("")

    const handleClick = useCallback((event: React.MouseEvent<HTMLParagraphElement>) => {
        const section = event.currentTarget.innerText
        setSectionName(section)
        setShowSection(true)
    }, [])

    const handleCloseModal = useCallback(() => {
        setShowSection(false);
    }, [])


    return (
        <div style={{position: 'absolute', top: '65vh', left: 0, width: '100%'}}>
            <section className={styles.container}>
                <div style={{flex: 1}}>
                    <h1 onClick={handleClick}
                        className={styles.paragraph}><span>QA</span></h1>
                    <h1 onClick={handleClick}
                        className={styles.paragraph}><span>Developer</span></h1>
                </div>
            </section>
            {showSection && <MeMobileModal closeModal={handleCloseModal} sectionName={sectionName}  />}
        </div>
    )
}
