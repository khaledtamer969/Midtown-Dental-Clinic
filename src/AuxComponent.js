import React from 'react';
 import classes from './AuxComponent.module.css';
 

const aux=(props)=>{

    return(<div className={classes.Aux}>
{props.children}
</div>);
}
export default aux;