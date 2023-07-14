import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { isEmpty } from './validation-empty';
let instance = axios.create({
    baseURL: "/"
})

export const  AxiosInterceptor = ({ children }) => {
    const navigate = useNavigate();
   
    useEffect(() => {
        const resInterceptor = response => {
            return response;
        }

        const errInterceptor = error => {
            if (error.response.status === 401) {
                navigate('/login');
            }
            return Promise.reject(error);
        }
        
        
        // Request interceptor for API calls
        instance.interceptors.request.use(
            async config => {
                const token = window.localStorage.getItem('JWT');
                if(isEmpty(token)){
                    return;
                }
                config.headers = {
                    'Authorization': `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
                return config;
            },
            error => {
                Promise.reject(error)
            });


        const interceptor = instance.interceptors.response.use(resInterceptor, errInterceptor);

        return () => instance.interceptors.response.eject(interceptor);

    }, [navigate])
    return children;
}

export default instance;