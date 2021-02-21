import React from "react";
import classes from './DentalTeam.module.css';
import PIC from '../Coverpage/Picture/Dr.Kareem.jpg';

const dentalteam =()=> {

return(
   <section id="DentalTeam" className={classes.DentalTeam}>
      

           <div >
                    <h1>Dental Team</h1>
                    <p><strong>Dr.Karem Abdelfattah</strong></p>
                    <p>"Membership at Royal College of Surgeons in London"</p>
                    <p>"Membership at IDDA , International digital dental academy UK"</p>
                    <p>"Esthetic and restorative dentistry specialist"</p>
                    <p>"BDS MSA university with highest honors"</p>
         
           </div>
           <img src={PIC} alt ="DR.Kareem" />
      
    </section>
    
  
    
 
);


};
export default dentalteam;