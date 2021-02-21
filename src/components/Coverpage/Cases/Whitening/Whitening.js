import React from 'react';
import Navigationitem from '../../../Toolbar/Navigationitems/Navigationitem/Navigationitem';
import Classes from './Whitening.module.css';
import LightBoxW from './LightBox';
import SlideShow from './Sildshow/Slidshow';

const whitening=()=>{

return(

    <section id='Cases' className={Classes.Whitening}>
        
<div >
    <h2>Whitening</h2>
    <div1>
    <SlideShow/>
    </div1>
    <span>
    <button>
    <li className={Classes.Navigationitem}>
        <a   href='https://wa.me/+201202430585?text=How Can '
        >ASK US NOW</a></li>
        </button>
    </span>
</div>

</section>
);

};
export default whitening;