import { createContext,useContext } from "react";
export const themeContext=createContext({
    // context ke ander pehle se hi value de di var bhi metho sbhi
    themeMode:"light",
    darkTheme: ()=> {},
    lightTheme: ()=> {},
})
// wrap krne ke liye
export const ThemeProvider = themeContext.Provider
// jb bbhi values chaiye hongi yha se le lunga
export default function useTheme(){
    return useContext(themeContext)
}