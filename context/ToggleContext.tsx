"use client"

import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
interface ToggleType {
    isDark: boolean,
    setIsDark: Dispatch<SetStateAction<boolean>>
}

export const ToggleContext = createContext<ToggleType | null>(null)

const ToggleProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isDark, setIsDark] = useState(false);


    return (
        <>
            <ToggleContext.Provider value={{ setIsDark, isDark }}>
                {children}
            </ToggleContext.Provider>
        </>
    );
}

export default ToggleProvider;