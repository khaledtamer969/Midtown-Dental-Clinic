import React from 'react';
import PIC from'./FB_IMG_1613221795244.jpg';
import Classes from './Crowns.module.css';
import SlideShow from './Slidshow';

const crowns=()=>{

return(

    <section id='Cases' className={Classes.Crowns}>
        
<div >
    <h2>Crowns</h2>
    
    
<SlideShow/>
    
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
export default crowns;