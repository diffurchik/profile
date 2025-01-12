import styles from './styles/language-switcher.module.css'
import {useCallback, useState} from "react";
import {Languages} from "../Translates.tsx";
import {useLanguage} from "../Context.tsx";

export const LanguageSwitcher: React.FC = () => {
    const [showLanguageMenu, setShowLanguageMenu] = useState<boolean>(false)
    const {language, setLanguage} = useLanguage()

    const onMenuClick = useCallback(() => {
        setShowLanguageMenu((prev) => !prev)
    }, [])

    const onLanguageChoose = useCallback((event: React.MouseEvent<HTMLLIElement>) => {
        const currentLanguage = event.currentTarget.innerText;
        let newLanguage: Languages
        switch (currentLanguage) {
            case "English":
                newLanguage = Languages.EN
                break;
            case "Русский":
                newLanguage = Languages.RU
                break;
            default:
                newLanguage = Languages.EN
                break;
        }
        setLanguage(newLanguage)
    }, [setLanguage])

    return (<>
        <div className={styles.button} onClick={onMenuClick}>
            <img src={'earth_east.svg'} alt="earth logo to change language" className={styles.image}/>
            <p>Language</p>
            <img src={'arrow_down.svg'} alt="arrow down" style={{ transform: showLanguageMenu? 'rotate(180deg)' : 'rotate(0)'}} className={styles.chevron}/>
        </div>
        {showLanguageMenu && <div className={styles.menu_container}>
            <ul className={styles.languages_list}>
                <li className={`${styles.language_option} ${language === Languages.EN ? styles.chosen_language : ''}`}
                    onClick={onLanguageChoose}>English
                </li>
                <li className={`${styles.language_option} ${language === Languages.RU ? styles.chosen_language : ''}`}
                    onClick={onLanguageChoose}>Русский
                </li>
            </ul>
        </div>}
    </>)
}