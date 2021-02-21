import React,{Component} from 'react'; 
import classes from './Layout.module.css';
import Toolbar from '../Toolbar/Toolbar';
import SideDrawer from '../Sidebar/Sidebar';
import Combine from '../../Combine';
    class Layout extends Component{
state ={
showSideDrawer: true

}
sideDrawerToggleHandler=()=>{
    this.setState((prevstate)=>{
        return {showSideDrawer:! prevstate.showSideDrawer};
    });
}

sideDrawerClosedHandler = () => {

this.setState({showSideDrawer:false});
}
    render(){
        return(
    <Combine>
   <Toolbar  drawerToggleClicked={this.sideDrawerToggleHandler} />
   <SideDrawer open= {this.state.showSideDrawer}closed={this.sideDrawerClosedHandler}/>
    <main className = {classes.Content}>
        {this.props.children}
    </main>
    </Combine>
    
        );
    }
 }
export default Layout;