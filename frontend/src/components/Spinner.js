import React from 'react';
import ReactLoading from 'react-loading';
 
const Spinner = ({ type, color }) => (
    <div style={{"marginLeft":"35%"}}><ReactLoading type="bars" color="white" height={267} width={75}/></div>
);
 
export default Spinner;