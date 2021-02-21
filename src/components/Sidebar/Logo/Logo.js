import React from 'react';
import ClinicLogo from '../../Coverpage/Picture/logoclinic.png';
import classes from './Logo.module.css';
const logo =(props)=>(
<div className={classes.Logo} sttle={{height:props.height}}>
<img src={ClinicLogo} alt="MYBURGER"/>

</div>

);
export default logo;  