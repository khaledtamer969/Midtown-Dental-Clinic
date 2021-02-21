import React from "react";
import classes from './Register.module.css';




const register =()=>{
   



    return(

        <div className={classes.Register}>
             <h2>Register Now to join our family</h2>
  <form action="https://formspree.io/f/mpzoewjq" method="POST">
      
           
            <div>
      		<p> Name:<input name="name" type="text"  id="name" placeholder="Name"/></p>	
              <p>Email:<input name="email" type="email"  id="email" placeholder="Email"/></p>	  
              <p>Age:<input name="AGE" type="AGE" id="AGE" placeholder="AGE"/></p>
              </div>	
              <div>
              <p>Number:<input name="NUMBER" type="text" id="Number" placeholder="Number"/></p>	
              <p>Address:<input name="Address" type="text" id="Address" placeholder='Address'/></p>	
              <span>
              <input type="submit" value="Send"/>
              </span>
              </div>
                      </form>
        </div>

    );
    };
    export default register;