import * as React from "react";
import styles from "./styles/contacts.module.css";
import {useCallback} from "react";
import {translations} from "../Translates.tsx";
import {useLanguage} from "../Context.tsx";

export const Contacts: React.FC = () => {
    const [feedback, setFeedback] = React.useState<boolean>(false);
    const {language} = useLanguage();

    const contacts = translations[language].contacts

    const isMobile = window.innerWidth < 768;

    const handleCopy = useCallback(async (event: React.MouseEvent<HTMLParagraphElement>) => {
        const text = event.currentTarget.innerText;

        try {
            await navigator.clipboard.writeText(text);
            setFeedback(true)

            setTimeout(() => {
                setFeedback(false);
            }, 3500);
        } catch (error) {
            console.error("Failed to copy text:", error);
        }
    }, [])
    return (
        <div style={{position: 'absolute', top: '110vh', left: 0, width: '100%'}}>
            <div className={styles.header}>{contacts.HEADER}</div>
            <div className={styles.container}>
                <a href="https://www.linkedin.com/in/diffurchik/" target="_blank" rel="noopener noreferrer"
                   className={styles.cardLink}>
                    <div className={styles.card}>
                        <img className={styles.image} src={'linkedIn.png'} alt={'LinkedIn logo'}/>
                        <h3>LinkedIn</h3>
                        <p onClick={handleCopy}
                           style={{textDecoration: isMobile ? "underline" : "none"}}>www.linkedin.com/in/diffurchik</p>
                    </div>
                </a>
                <a href="https://t.me/diffurchik" target="_blank" rel="noopener noreferrer"
                   className={styles.cardLink}>
                    <div className={styles.card}>
                        <img className={styles.image} src={'telegram.png'} alt={'LinkedIn logo'}/>
                        <h3>Telegram</h3>
                        <p>@diffurchik</p>
                    </div>
                </a>
                <a href="mailto:example@example.com" target="_blank" rel="noopener noreferrer"
                   className={styles.cardLink}>
                    <div className={styles.card}>
                        <img className={styles.image} src={'email.png'} alt={'LinkedIn logo'}/>
                        <h3>Email</h3>
                        <p onClick={handleCopy}
                           style={{textDecoration: isMobile ? "underline" : "none"}}>annabogoluybova@gmail.com</p>
                    </div>
                </a>
                <a href="https://github.com/diffurchik" target="_blank" rel="noopener noreferrer"
                   className={styles.cardLink}>
                    <div className={styles.card}>
                        <img className={styles.image} src={'github.png'} alt={'LinkedIn logo'}/>
                        <h3>Github</h3>
                        <p>diffurchik</p>
                    </div>
                </a>
            </div>
            {feedback && <p style={{
                position: "absolute",
                top: "100%",
                left: "50%",
                transform: "translateX(-50%)",
                marginTop: "5px",
                background: "black",
                color: "white",
                padding: "5px 10px",
                borderRadius: "5px",
                fontSize: "12px",
            }}>Link copied to clipboard!</p>}
        </div>
    )
}