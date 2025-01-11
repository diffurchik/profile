import {createContext, ReactNode, useContext, useState} from "react";
import {Languages} from "./Translates.tsx";

interface LanguageContextProps {
    language: Languages;
    setLanguage: (language: Languages) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<Languages>(Languages.EN);

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};