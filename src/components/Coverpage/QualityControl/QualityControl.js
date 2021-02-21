import React from 'react';
import classes from './QualityControl.module.css';
import Pic1 from '../Picture/Materials.jpg';
import Pic2 from '../Picture/D.jpg';
import Pic3 from '../Picture/Procedure.jpg';
const qualitycontrol=()=>{
return(
<section id="Quality" className={classes.Quality}>
    <div>
    <h1>How Could We Manage Our</h1>
        <h2> Quality Control</h2>
        <h3>   <span>3</span>Main Aspects</h3>

    </div>
<div4>
    

<div1>

<p1>Highest Quality <strong>Materials</strong>  </p1>
<img src={Pic3} alt ="Materials"/>

</div1>

<div2>
<p2 >Highest Quality <strong>Dental Labs</strong>  </p2>
<img src={Pic1} alt ="Materials"/>

</div2>
<div3>

<p3 ><strong>Work Flow</strong> </p3>
<img src={Pic2} alt ="Materials"/>
</div3>

</div4>
</section>
);
};
export default qualitycontrol;