import * as React from "react";
import {CustomParagraph} from "./styles/developerStyles.tsx";
import {translations} from "../Translates.tsx";
import {useLanguage} from "../Context.tsx";
import styles from './styles/about-me-texts.module.css'

type Props = {
    positionTop: number,
}

export const Developer: React.FC<Props> = ({positionTop}: Props) => {
    const {language} = useLanguage();

    const texts = translations[language].about.DEV_TEXT as string[];

    return (
        <CustomParagraph $positionTop={positionTop} style={{right: 0, display: "block"}}>
            <div className={styles.scrollableContent}>
                {texts.map((element: string, index) =>
                    <li key={index}>{element}</li>
                )}
            </div>
        </CustomParagraph>
    )
}

