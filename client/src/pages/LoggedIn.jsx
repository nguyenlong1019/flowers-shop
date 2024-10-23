import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const LoggedIn = ({children}) => {
    const {currentUser} = useContext(AuthContext);

    if (currentUser) {
        return <Navigate to="/" />;
    }

    return children;
};

export default LoggedIn;