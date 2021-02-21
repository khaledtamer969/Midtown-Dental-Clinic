import React from 'react';
import PIC from'./Watermark_1577828582195.jpg';
import Classes from './Implants.module.css';
import LightBox from './LightBoxImplants';
import Slideshow from './Slidshow';
const implants=()=>{

return(

    <section id='Cases' className={Classes.Implants}>
        
<div >
    <h2>Implants</h2>
    
   <Slideshow/>
    
   <span>
    <button>
    <li className={Classes.Navigationitem}>
        <a   href='https://wa.me/+201202430585?text=urlencodedtext'
        >ASK US NOW</a></li>
        </button>
    </span>

</div>
</section>
);

};
export default implants;