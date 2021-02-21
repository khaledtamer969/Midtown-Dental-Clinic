import React from'react';
 import classes from './Toolbar.module.css';
 import Navigationitems from './Navigationitems/Navigationitems';
 import Logo from '../Sidebar/Logo/Logo';
 import DrawerToggle from '../Sidebar/Drawtoggle/DrawToggle';
const toolbar =(props)=>(
<header className={classes.Toolbar}>
<DrawerToggle clicked={props.drawerToggleClicked}/>
    <Logo/>
    <nav className={classes.Desktoponly} >
        <Navigationitems  />
    </nav>

</header>
);
export default toolbar;