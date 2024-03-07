import { createContext, useState, useEffect} from "react";
import queryString from 'query-string'
import axios from 'axios';
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({children}) => {
    // console.log(JSON.parse(localStorage.getItem('authtokens')).access)
    const [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authtokens') ? JSON.parse(localStorage.getItem('authtokens')) : null)
    const [user, setUser] = useState(() => localStorage.getItem('authtokens') ? jwtDecode(JSON.parse(localStorage.getItem('authtokens')).access) : null)
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate()

    const googleAuthenticate = async (state, code) => {
        if(state && code) {
            const details = {
                'code' : code,
                'state' : state,
            }
            const formBody = queryString.stringify(details)
            console.log(formBody);
            try {
                const res = await axios.post(`https://api.eesiitbhu.co.in/api/user/auth/social/o/google-oauth2/`, formBody, { type : 'application/x-www-form-urlencoded', withCredentials : true})
                const check1 = await axios.get(`https://api.eesiitbhu.co.in/api/user/`, {
                    headers : {
                        "Authorization" : `Bearer ${res.data.access}`
                    }
                })
                console.log(check1.data);
                console.log("check1");
                setAuthTokens(res.data);
                setUser(jwtDecode(res.data.access));
                localStorage.setItem('authtokens', JSON.stringify(res.data));
                if(check1.data.profile.college === '' || check1.data.profile.year === '') {
                    navigate("/gsignup")
                } else {
                    navigate('/');
                }
            } catch (err) {
                console.error(err);
            }
        }
    }

    const signUpUser = async (validatedFormData) => {
        const details = {
            "email" : validatedFormData.email,
            "name" : validatedFormData.name,
            "college" : validatedFormData.collegeName,
            "year" : validatedFormData.year,
            "password" : validatedFormData.password,
            "password_confirmation" : validatedFormData.confirmPassword
        }
        const formBody = queryString.stringify(details);
        console.log(formBody);
        try {
            const res = await axios.post(`https://api.eesiitbhu.co.in/api/user/register/`, formBody, { type : 'application/json'})
            setAuthTokens(res.data);
            setUser(jwtDecode(res.data.access));
            localStorage.setItem('authtokens', JSON.stringify(res.data));
            navigate('/otp');
        } catch (err) {
            console.error(err);
        }
    }

    const loginUser = async (validatedFormData) => {
        const details = {
            "email" : validatedFormData.email,
            "password" : validatedFormData.password
        }
        const formBody = queryString.stringify(details) 
        console.log(formBody);
        try {
            const res = await axios.post('https://api.eesiitbhu.co.in/api/user/login/', formBody, {
                type: 'application/json'
            })
            setAuthTokens(res.data)
            setUser(jwtDecode(res.data.access))
            console.log(res.data)
            localStorage.setItem('authtokens', JSON.stringify(res.data))
            navigate('/dashboard')
        } catch(err) {
            console.error(err);
        }
    }


    const logoutUser = async () => {
        const details = {
            "refresh_token" : authTokens.refresh
        }
        const formBody = queryString.stringify(details)
        try {
            const res = await axios.post('https://api.eesiitbhu.co.in/api/user/logout/', formBody, {headers: {"Authorization" : `Bearer ${authTokens.access}`}})
            console.log(res)
        } catch(err) {
            console.log(err)
        }
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authtokens')
        navigate('/');
    }

    const updateToken = async () => {
        console.log("Update token called");
        console.log(user)
        if(authTokens) {
            const token = {
                "refresh" : authTokens.refresh,
            }
            const formBody = queryString.stringify(token);
            console.log(formBody);
            try {
                const res = await axios.post('https://api.eesiitbhu.co.in/api/user/auth/jwt/refresh/', formBody, {
                    type : 'application/json'
                });
                console.log(res);
                const newTokens = {
                    'access' : res.data.access,
                    'refresh' : res.data.refresh,
                }
                setAuthTokens(newTokens)
                setUser(jwtDecode(res.data.access))
                localStorage.setItem("authtokens", JSON.stringify(newTokens))
            } catch (err) {
                console.error(err);
            }
            if(loading) {
                setLoading(false);
            }
        }
    }

    const contextData = {
        googleAuthenticate: googleAuthenticate,
        user: user,
        logoutUser: logoutUser,
        authTokens: authTokens,
        signUpUser: signUpUser,
        loginUser: loginUser,
    }

    useEffect(() => {
        if(loading) {
            updateToken()
        }
        const tfMinutes = 1000*60*25
        const interval = setInterval(()=> {
            if(authTokens) {
                updateToken()
            }
        }, tfMinutes)
        return () => clearInterval(interval)
    }, [authTokens, loading])

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}