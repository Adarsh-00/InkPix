import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import {useNavigate} from 'react-router-dom';

export const AppContext = createContext();
const AppContextProvider = (props) => {
    const [user, setUser] = useState(null);
    const [showLogin, setShowLogin] = useState(false);
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [credit, setCredit] = useState(false);

    const navigate = useNavigate();

    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    //logout user
    const logout = () => {
        localStorage.removeItem('token');
        setToken('');
        setUser(null);

    }

    //load the credit data of the user
    const loadCreditData = async () => {
        try {
            const {data} = await axios.post(`${backendUrl}/api/user/credits`, {}, {headers: {token}});
            if(data.success){
                setCredit(data.credit);
                setUser(data.user);
            }
            else{
             toast.error("Can't get the credit details");
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    //load credit data whenever token is change
    useEffect(() => {
        if(token){
            // console.log(token);
            loadCreditData();
        }
    }, [token]);


    //generate image
    const generateImage = async (prompt) => {
        try {
            const {data} = await axios.post(`${backendUrl}/api/image/generate-image`, {prompt}, {headers: {token}});
            
            if(data.success){
                loadCreditData();
                return data.result;

            } else {
                toast.info(data.message);
                loadCreditData();
                if(data.creditBalance === 0) {
                    navigate('/buy');
                }
            }
            
        } catch (error) {
            toast.error(error.message);
        }
    }
    const value = {
        user, setUser, showLogin, setShowLogin, backendUrl,
        token, setToken, credit, setCredit, loadCreditData, logout, generateImage
    }; 

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
};

export default AppContextProvider;