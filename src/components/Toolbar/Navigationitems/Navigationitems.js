import React from 'react';
 import classes from './Navigationitems.module.css';
 import Navigationitem from './Navigationitem/Navigationitem';


 
const navigationitems =() =>(
<ul className={classes.Navigationitems}>
<Navigationitem  link="#Who" class="smoothScroll" active> Who We Are? </Navigationitem>
<Navigationitem  link="#DentalTeam" active>Dental Team </Navigationitem>
<Navigationitem   link="#Vision"  active>Vision </Navigationitem>
<Navigationitem  link="#Quality" active>Quality Control</Navigationitem>
<Navigationitem  link="#Cases" active>  Cases  </Navigationitem>
<Navigationitem   link="#Reviews" active>  Reviews </Navigationitem>
<Navigationitem   link="#ContactUS" active>  Contact US </Navigationitem>



</ul>

);
export default navigationitems;