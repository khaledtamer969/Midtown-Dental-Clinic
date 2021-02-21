import React from 'react';
import PIC from'./Collage 2021-02-15 19_52_00.jpg';
import Classes from './Pedo.module.css';
import LightBox from './LightBoxPedo';
import Slideshow from './Slidshow';
const pedo=()=>{

return(

    <section id='Cases' className={Classes.Pedo}>
        
<div >
    <h2>Pedo</h2>
    
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
export default pedo;