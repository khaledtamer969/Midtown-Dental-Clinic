import React from 'react';
import PIC from'./Collage 2021-02-15 19_48_08.jpg';
import Classes from './ScalingAndPolishing.module.css';
import LightBox from './LightBoxScalingAndPolishing';
import Slideshow from './Slidshow';
const scalingandpolishing=()=>{

return(

    <section id='Cases' className={Classes.ScalingAndPolishing}>
        
<div >
    <h2>Scaling and Polishing</h2>
    
    
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
export default scalingandpolishing;