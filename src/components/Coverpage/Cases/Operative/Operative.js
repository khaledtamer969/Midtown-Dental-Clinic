import React from 'react';

import Classes from './Operative.module.css';
import LightBox from './LightBoxOperative';
import Slideshow from './Slidshow';
const operative=()=>{

return(

    <section id='Cases' className={Classes.Operative}>
        
<div >
    <h2>Operative</h2>
    
    
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
export default operative;