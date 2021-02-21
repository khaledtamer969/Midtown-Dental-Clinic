import React from 'react';
import PIC from'./IMG_20201107_232554.jpg';
import Classes from './Endo.module.css';
import LightBox from './LightBoxEndo';
import Slideshow from './Slidshow';
const endo=()=>{

return(

    <section id='Cases' className={Classes.Endo}>
        
<div >
    <h2>Endo</h2>
    
    
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
export default endo;