import React ,{ createContext, useState } from "react";

interface ThemeContextTypes {
    dark:boolean;
    AlterTheme(alter:boolean):void;
}

const ThemeContext = createContext({} as ThemeContextTypes);

function ThemeProvider({children}: any){
    const [dark, setDark] = useState(false);

    function AlterTheme(alter:boolean){
        setDark(alter)
    }
    return (
        <ThemeContext.Provider value={{
            dark,
            AlterTheme
        }}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeProvider};