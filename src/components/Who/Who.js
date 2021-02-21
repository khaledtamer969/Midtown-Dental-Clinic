
import React from "react";
import classes from './Who.module.css';
import Pa from '../Coverpage/Picture/PA/PA';
const who =(props)=> {

return(
   <section>
        <Pa/>
    <div id="Who" className={classes.Who}>
        
         <div1>
        <h1>who we are ?</h1>
        <body>MIDTOWN dental clinic in the heart of 6th october
a specialized clinic serving the highest quality dental treatments according to RCS "Royal
college of surgeons in london " .. with strict infection control measurements and disinfection ..
we specialized in Esthetic and restorative dentistry with Excellence , in addition to implants and
full mouth reconstruction.</body>
<li className={classes.Navigationitem}>
        <a   href={props.link} 
        className={props.active ? classes.active:null}>{props.children} </a></li>
</div1>
    </div>
    </section>
    
  
    
 
);


};
export default who;