import React from 'react';
import Logo from './Logo/Logo';
import Navigationitems from '../Toolbar/Navigationitems/Navigationitems';
import classes from './SideDrawer.module.css';
import Combine from '../../Combine';
import Backdrop from '../../Ui/Backdrop/Backdrop';


const  sidedrawer =(props)=>{
let attachedClasses=[classes.SideDrawer,classes.Close];
if (props.open )
{
attachedClasses=[classes.SideDrawer,classes.Open];

}
    return(
        <Combine>
        <Backdrop show={props.open} clicked ={props.closed}/>
        <div className={attachedClasses.join(' ')}>
            <div className={classes.Logo}>
            <Logo/>
            </div>

<nav>
    <Navigationitems/>
</nav>

        </div>
        </Combine>
    );
};
export default sidedrawer;