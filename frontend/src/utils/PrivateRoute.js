import React, { useContext } from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import AuthContext from '../context/AuthContext';


const PrivateRoute = ({children, ...rest}) => {
    const {user} = useContext(AuthContext);
    console.log(user);
    return (
        <>
        {!user ? <Navigate to='/login' /> : 
        <Routes>
            <Route {...rest}>{children}</Route>
        </Routes>}
        </>
    )
}

export default PrivateRoute