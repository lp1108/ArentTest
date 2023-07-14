import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";

export const ProtectedRoute = ({ children }) => {
    const { account, prismJWT } = useAuth();
    const navigate = useNavigate();
    // TODO
    // if (!account) {
    //     // user is not authenticated
    //     navigate("/login")
    // }

    return children;
};