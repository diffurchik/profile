import * as React from "react";
import {CustomParagraph} from "./styles/developerStyles.tsx";
import {useLanguage} from "../Context.tsx";
import {translations} from "../Translates.tsx";
import styles from './styles/about-me-texts.module.css'


type Props = {
    positionTop: number
}

export const QA: React.FC<Props> = ({positionTop}: Props) => {
    const {language} = useLanguage();

    const texts = translations[language].about.QA_TEXT as string[];

    return (
        <CustomParagraph $positionTop={positionTop} style={{left: 0, display: "block"}}>
            <div className={styles.scrollableContent}>
                {texts.map((element: string, index) =>
                    <li key={index}>{element}</li>
                )}
            </div>
        </CustomParagraph>)
}