import {useContext} from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';

const LoginRequiredAdmin = ({children}) => {
    const {currentUser} = useContext(AuthContext);

    if (!currentUser || currentUser.role !== 'admin') {
        return <Navigate to="/admin/login" />;
    }

    return children;
};

export default LoginRequiredAdmin;