import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../constexts/authContexts";

export function useQuickOut() {
    const { userName, token } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!token || !userName) {
            navigate('/');
        }
    }, []);
}