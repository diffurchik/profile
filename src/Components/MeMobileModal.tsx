import styles from "./styles/mobile-container.module.css";
import * as React from "react";
import {Developer} from "./Developer.tsx";
import {QA} from "./QA.tsx";

type Props = {
    closeModal: () => void;
    sectionName: string;
}
export const MeMobileModal: React.FC<Props> = ({closeModal, sectionName}: Props) => {

    return (<div className={styles.container}>
            <button className={styles.button} onClick={closeModal}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
            <div className={styles.wrapper}>
                <img src={sectionName === "Developer" ? 'icon_5.png' : "photo_2.png"} alt={'photo of Anna'}
                     className={styles.image}/>
                {sectionName === "Developer" ? <Developer positionTop={200}/> :
                    <QA positionTop={200}/>}
            </div>
        </div>
    )
}