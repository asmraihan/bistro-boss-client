import {  useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import useAuth from "./useAuth";

    // Create a new axios instance.
    const axiosSecure = axios.create({
      baseURL: 'http://localhost:5000',
  })
  
// This is the custom hook we will use to create an axios instance with an Authorization header.
const useAxiosSecure = ()=>{
    // We will use this to log the user out if their token expires.
    const {logOut} = useAuth()
    const navigate = useNavigate()

    // Add an interceptor to the axios instance.
    // This will add an Authorization header (token injection) to every request if the user is logged in.
    useEffect(()=>{
        axiosSecure.interceptors.request.use((config)=>{
            // If there is no access token, the user is not logged in.
            // If the user is not logged in, we do not add an Authorization header.
            const token = localStorage.getItem('access-token')
            if(token){
                // Add the access token to the Authorization header if token is found.
                config.headers.authorization = `Bearer ${token}`
            }  
            return config
        })

        // Again add an interceptor to the axios instance for response.
        axiosSecure.interceptors.response.use(
            (response) => response,
            async (error) => {
              if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                await logOut();
                navigate('/login');
              }
              return Promise.reject(error);
            }
          );
        }, [logOut, navigate]);
      
        return [axiosSecure];
      };
      
      export default useAxiosSecure;