import React from 'react';
import PIC from'./Collage 2020-11-08 01_22_47.jpg';
import Classes from './AnteriorComposite.module.css';
import SlideShow from './Slidshow';

const anteriorcomposite =()=>{

return(

    <section id='Cases' className={Classes.AnteriorComposite}>
        
<div >
    <h2>Anterior Esthetic restorations</h2>
    
    
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
export default anteriorcomposite;