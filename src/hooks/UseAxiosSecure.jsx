import axios from 'axios';
import useAuth from './useAuth';
import { useNavigate } from 'react-router-dom';

const axiosSecure = axios.create({
    baseURL: 'http://localhost:3000'  // আপনার backend URL
});

const UseAxiosSecure = () => {
    const { user, logOut } = useAuth();
    const navigate = useNavigate();

    axiosSecure.interceptors.request.use(config => {
        if(user?.accessToken){
            config.headers.Authorization = `Bearer ${user.accessToken}`;
        }
        return config;
    });

    axiosSecure.interceptors.response.use(
        res => res,
        async err => {
            if(err.response?.status === 401 || err.response?.status === 403){
                await logOut();
                navigate('/login');
            }
            return Promise.reject(err);
        }
    );

    return axiosSecure;
};

export default UseAxiosSecure;
