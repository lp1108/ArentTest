import { useEffect } from "react";
import { useState, useContext, createContext } from "react";
import { useSelector } from "react-redux";
import { useLocalStorage } from "./local-storage-context";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const account = useSelector((state) => state.account);
    const [prismJWT, setPrismJWT] = useLocalStorage("JWT", null);
    const value = { account, prismJWT, setPrismJWT }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (typeof context === "undefined") throw new Error("useAuth must be used within a AuthProvider");
    return context;
}
