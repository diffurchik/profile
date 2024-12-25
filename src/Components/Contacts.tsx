import * as React from "react";
import styles from "./contacts.module.css";

export const Contacts: React.FC = () => {

    return (
        <div style={{position: 'absolute', top: '120vh', left: 0, width: '100%'}}>
            <div className={styles.header}>Contacts</div>
            <div className={styles.container}>
                <a href="https://www.linkedin.com/in/diffurchik/" target="_blank" rel="noopener noreferrer"
                   className={styles.cardLink}>
                    <div className={styles.card}>
                        <img className={styles.image} src={'linkedIn_6.png'} alt={'LinkedIn logo'}/>
                        <h3>LinkedIn</h3>
                        <p>www.linkedin.com/in/diffurchik</p>
                    </div>
                </a>
                <a href="https://t.me/diffurchik" target="_blank" rel="noopener noreferrer"
                   className={styles.cardLink}>
                    <div className={styles.card}>
                        <img className={styles.image} src={'telegram_8.png'} alt={'LinkedIn logo'}/>
                        <h3>Telegram</h3>
                        <p>@diffurchik</p>
                    </div>
                </a>
                <a href="mailto:example@example.com" target="_blank" rel="noopener noreferrer"
                   className={styles.cardLink}>
                    <div className={styles.card}>
                        <img className={styles.image} src={'email_9.png'} alt={'LinkedIn logo'}/>
                        <h3>Email</h3>
                        <p>annabogoluybova@gmail.com</p>
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
        </div>
    )
}