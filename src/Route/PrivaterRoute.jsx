import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router';
import Loading from '../components/Loading/Loading';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();


    if (loading) {
        return <div>
            <span className='loading loading-infinity loading-xl'></span>
        </div>
    }

    if (!user) {
        return <Navigate state={location.pathname} to="/login"></Navigate>
    }
    return children;
};
/**
 * <div>
            <span className="loading loading-infinity loading-xl"></span>
        </div>
 */
export default PrivateRoute;