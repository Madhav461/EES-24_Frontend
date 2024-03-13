import React, { useContext, useEffect } from 'react'
import {Routes, Route, Navigate, useNavigate} from 'react-router-dom'
import AuthContext from '../context/AuthContext';


const PrivateRoute = ({children, ...rest}) => {
    const {user} = useContext(AuthContext);
    const navigate = useNavigate()
    console.log(user);
    useEffect(() => {
        if(!user) {
            navigate("/")
        }
    }, [user])
    return (
        <React.Fragment>
            <Route {...rest}>{children}</Route>
        </React.Fragment>
    )
}

export default PrivateRoute