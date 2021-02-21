import React from 'react';
import PIC from'../Picture/veneers.jpg';
import Classes from './Cases.module.css';
import Veneers from './Veneers/Veneers';
import Operative from './Operative/Operative';
import Pedo from './Pedo/Pedo';
import Implants from './Implants/Implants';
import Whitening from './Whitening/Whitening';
import Endo from './Endo/Endo';
import Crowns from'./Crowns/Crowns';
import AnteriorComposite from './AnteriorComposite/AnteriorComposite';
import ScalingAndPolishing from './ScalingAndPolishing/ScalingAndPolishing';

const cases=()=>{
    

return(
    

    <section id='Cases'className={Classes.Cases} >

<div>
<Whitening/>
<Veneers/>
<ScalingAndPolishing/>
</div>
<div>
    <Pedo/>
    <Operative/>
    <Implants/>
</div>
<div>
<Endo/>
<Crowns/>
<AnteriorComposite/>

</div>


</section>
);

};
export default cases;