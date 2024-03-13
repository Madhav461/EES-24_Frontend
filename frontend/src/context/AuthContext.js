import { createContext, useState, useEffect} from "react";
import queryString from 'query-string'
import axios from 'axios';
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import dayjs from 'dayjs'

const AuthContext = createContext()

export const axiosInstance = axios.create();

export default AuthContext;

export const AuthProvider = ({children}) => {
    // console.log(JSON.parse(localStorage.getItem('authtokens')).access)
    const [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authtokens') ? JSON.parse(localStorage.getItem('authtokens')) : null)
    const [user, setUser] = useState(() => localStorage.getItem('authtokens') ? jwtDecode(JSON.parse(localStorage.getItem('authtokens')).access) : null)
    const [loading, setLoading] = useState(true);
    const [userDetails, setUserDetails] = useState(null)
    const [pageloading, setPageLoading] = useState(false)

    const navigate = useNavigate()

    const googleAuthenticate = async (state, code) => {
        setPageLoading(true);
        if(state && code) {
            const details = {
                'code' : code,
                'state' : state,
            }
            const formBody = queryString.stringify(details)
            console.log(formBody);
            try {
                const res = await axios.post(`https://api.eesiitbhu.co.in/api/user/auth/social/o/google-oauth2/`, formBody, { type : 'application/x-www-form-urlencoded', withCredentials : true})
                const check1 = await axiosInstance.get(`https://api.eesiitbhu.co.in/api/user/`, {
                    headers : {
                        "Authorization" : `Bearer ${res.data.access}`
                    }
                })
                
                // console.log(check1.data);
                // console.log("check1");
                setAuthTokens(res.data);
                setUser(jwtDecode(res.data.access));
                // setUserDetails(check1.data)
                localStorage.setItem('authtokens', JSON.stringify(res.data));
                if(check1.data.profile.college === '' || check1.data.profile.year === '') {
                    navigate("/gsignup")
                    toast.info("Please fill college and year  !", {
                        position: "bottom-right"
                      });
                } else {
                    navigate('/dashboard');
                    toast.success("logged in succesfully !", {
                        position: "bottom-right"
                      });
                }
            } catch (err) {
                console.error(err);
            }
        }
        setPageLoading(false)
    }

    const signUpUser = async (validatedFormData) => {
        setPageLoading(true)
        const details = {
            "email" : validatedFormData.email,
            "name" : validatedFormData.name,
            "college" : validatedFormData.CollegeName,
            "year" : validatedFormData.year,
            "password" : validatedFormData.password,
            "password_confirmation" : validatedFormData.confirmPassword
        }
        const formBody = queryString.stringify(details);
        console.log(formBody);
        try {
            const res = await axios.post(`https://api.eesiitbhu.co.in/api/user/register/`, formBody, { type : 'application/json'})
            if(res.status === 400) {
                toast.error(res.data, {
                    position: "bottom-right"
                  });
            }
            setAuthTokens(res.data);
            setUser(jwtDecode(res.data.access));
            localStorage.setItem('authtokens', JSON.stringify(res.data));
            navigate('/otp');
            const otpreq = await axios.get('https://api.eesiitbhu.co.in/api/user/verify/', {headers : {
            "Authorization" : `Bearer ${res.data.access}`
            }})
            console.log(otpreq);
            toast.info("verify the otp sent to registered mail id ", {
                position: "bottom-right"
            });
        } catch (err) {
            navigate('/')
            console.error(err);
            toast.error("User already exists", {
                position: "bottom-right"
              });
        }
        setPageLoading(false);
    }

    const loginUser = async (validatedFormData) => {
        setPageLoading(true)
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
            window.location.reload();
            toast.success("Logged in succesfully !", {
                position: "bottom-right"
              });
        } catch(err) {
            toast.error("invalid credentials !", {
                position: "bottom-right"
              });
            console.error(err);
        }
        setPageLoading(false)
    }


    const logoutUser = async () => {
        console.log("logoutUser");
        setPageLoading(true)
        const details = {
            "refresh_token" : authTokens.refresh
        }
        const formBody = queryString.stringify(details)
        try {
            const res = await axios.post('https://api.eesiitbhu.co.in/api/user/logout/', formBody, {headers: {"Authorization" : `Bearer ${authTokens.access}`}})
            console.log(res)
        } catch(err) {
            console.log(err)
            toast.error("Something went wrong _auth1!", {
                position: "bottom-right"
            });
        }
        setPageLoading(false)
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authtokens')
        navigate('/');
        toast.success("loged out succesfully !", {
            position: "bottom-right"
        });
    }

    const updateUserInfo = async (validatedFormData) => {
        setPageLoading(true)
        if(authTokens) {
            const details = {
                'college' : validatedFormData.collegeName,
                'name' : validatedFormData.name,
                'year' : validatedFormData.year
            }
            const formData = queryString.stringify(details)
            try {
                const res = await axiosInstance.patch('https://api.eesiitbhu.co.in/api/user/update/', formData, {headers : {
                    "Authorization" : `Bearer ${authTokens.access}`
                }})
                console.log(res);
                if(res.status === 200) {
                    loadUser()
                    navigate("/dashboard")
                    // toast.success("")
                    toast.success("credentials updated succesfully !", {
                        position: "bottom-right"
                      });
                }
            } catch (err) {
                console.error(err);
                toast.error("something went wrong _auth2!", {
                    position: "bottom-right"
                  });
            }
        }
        setPageLoading(false)
    }

    axiosInstance.interceptors.request.use(async (req) => {
        console.log("Interceptor Ran");
        const isExpired = dayjs.unix(user?.exp).diff(dayjs()) < 1;
        console.log(isExpired)

        if(!isExpired) return req;

        const refreshDecoded = jwtDecode(authTokens?.refresh)
        console.log(refreshDecoded);
        const isRefreshExpired = dayjs.unix(refreshDecoded?.exp).diff(dayjs()) < 1;
        if(isRefreshExpired) {
            logoutUser();
            return;
        }
        const token = {
            "refresh" : authTokens.refresh,
        }
        const formBody = queryString.stringify(token);
        try{
            const res = await axios.post('https://api.eesiitbhu.co.in/api/user/auth/jwt/refresh/', formBody)
            console.log(res);
            setAuthTokens(res.data);
            setUser(jwtDecode(res.data.access));
            if(res.status >= 400) {
                console.log("Error");
                logoutUser();
            }
        } catch(err) {
            console.log("Err");
            logoutUser();
            console.error(err);
        }
    })

    const loadUser = async () => {
        setPageLoading(true)
        try {
            const res = await axiosInstance.get('https://api.eesiitbhu.co.in/api/user/', { headers : {
            "Authorization" : `Bearer ${authTokens.access}`
            }})
            console.log(res.data);
            setUserDetails(res.data)
        } catch (err) {
            console.error(err);
        }
        setPageLoading(false)
    }

    const contextData = {
        googleAuthenticate: googleAuthenticate,
        user: user,
        logoutUser: logoutUser,
        authTokens: authTokens,
        signUpUser: signUpUser,
        loginUser: loginUser,
        userDetails : userDetails,
        updateUserInfo : updateUserInfo,
        pageloading : pageloading,
        setPageLoading : setPageLoading,
        loadUser : loadUser,
    }

    useEffect(() => {
        let mounted = true;
        if(mounted && user && authTokens) {
          loadUser()
        }
        return () => {
          mounted = false;
        }
      }, [user, authTokens])

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}
