import React from "react";
import classes from './Review.module.css';
import Register from'./Register/Register';
import Slideshow from "./Showslides/Slidshow";
const review =()=>{
   



    return(
    <section  >
            <div id="Reviews" className={classes.Review}>
            <h1>Reviews</h1>
            </div>

          
            <div1 id="Reviews" className={classes.Review}>
                <Slideshow/>
      <span><Register/></span>
      </div1>
        </section>

    );

    
    };
    export default review;