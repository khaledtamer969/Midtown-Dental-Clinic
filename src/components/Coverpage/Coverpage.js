import React from 'react ';
import coverphoto from './Picture/2 Midtown-coverpage.jpg';
import classes from './Coverpage.module.css';


const coverpage =()=>(
<div className={classes.Coverpage} >
<img src={coverphoto} alt="MIDTOWN_CLINIC"/>

</div>

);
export default coverpage;