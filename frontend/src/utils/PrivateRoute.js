// import React, { useContext, useEffect } from 'react'
// import {Routes, Route, Navigate, useNavigate} from 'react-router-dom'
// import AuthContext from '../context/AuthContext';


// const PrivateRoute = ({children, ...rest}) => {
//     const {user} = useContext(AuthContext);
//     const navigate = useNavigate()
//     console.log(user);
//     useEffect(() => {
//         if(!user) {
//             navigate("/")
//         }
//     }, [user])
//     return (
//         <React.Fragment>
//             <Route {...rest}>{children}</Route>
//         </React.Fragment>
//     )
// }

// export default PrivateRoute
import { Outlet, Navigate } from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from '../context/AuthContext';
const PrivateRoutes = () => {
    const  {authTokens}=useContext(AuthContext);
    let auth = {'token': authTokens}
    return(
        auth.token ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateRoutes