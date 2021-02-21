
import React from "react";
import classes from './Contact.module.css';
import img1 from './googlemaps.png';
import img2 from './LOGOOOO.png';
import img3 from './whatsapp.jpg';
import img4 from './email.png';
import img5 from './Facebook_Icon.png';
import img6 from './Instagram_icon.png';

const contact=(props)=> {

return(
    
   <section id="ContactUS" className={classes.Contact}>
       
       <div>
<img src={img1} alt ="googlemap"/>
<p>6th october-Cairo medical center -central axis -5th district
behind EDEN hospital -floor no.1 -clinic 11</p>
 </div>
 <div1>
 <img src={img2} alt ="googlemap"/>
 </div1>
    <div2>
         <div3>
       <img src={img3}alt="whatsapp"/>
        <p  >Number:01202430585 - 01151570646  </p>
        </div3>
        <div4>
       <img src={img4}alt="Email"/>
        <p>Email:midtowndentalclinic5@gmail.com</p>
        </div4>
        <div5>
<img onClick= {<a href={"https://www.facebook.com/Midtowndentalclinic1"}/>} src={img5}alt="Facebook"/>
        <p>MIDTOWN Dental clinic-MDC</p>
        </div5>
        <div6>
       <img onClick= {<a href={props.link1}/>}src={img6}alt="Instagram"/>
        <p>MIDTOWN Dental clinic-MDC</p>
        </div6>

    </div2>
    
    
    </section>
   
 
);


};
export default contact;