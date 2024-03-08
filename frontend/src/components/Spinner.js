import React from 'react';
import ReactLoading from 'react-loading';
 
const Spinner = ({ type, color }) => (
    <div className='h-screen flex items-center justify-center'><ReactLoading type="bars" color="white" /></div>
);
 
export default Spinner;