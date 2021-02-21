import React ,{Component}  from 'react';
import  {Suspense} from 'react';
import coverphoto from './components/Coverpage/Picture/cover website.jpg';
import classes from './App.module.css';
import Who from './components/Who/Who';
import Vision from './components/Coverpage/Vision/Vision';
import DentalTeam from './components/DentalTeam/DentalTeam';
import Contact from './components/Coverpage/Contact/Contact';
import QualityControl from './components/Coverpage/QualityControl/QualityControl';
import Cases from './components/Coverpage/Cases/Cases';
import Reviews from './components/Coverpage/Review/Review';
import Mission from './components/Coverpage/Mission/Mission';
import AUX from './AuxComponent';
import Layout from './components/Layout/Layout';
import {useTranslation} from "react-i18next";
import Whi from './components/Coverpage/Cases/Whitening/Whitening';
class App extends Component {

 
  render(){
    function HeaderComponent()
{
    const [t, i18n] = useTranslation('common');
    return <div>
        <h1>{t('welcome.title', {framework:'React'})}</h1>
        <button onClick={() => i18n.changeLanguage('de')}>de</button>
        <button onClick={() => i18n.changeLanguage('en')}>en</button>
    </div>
}
  return (
  
 <div >
   
     <Layout/>
    
     <div className={classes.App}>
 <img src={coverphoto} alt="MIDTOWN_CLINIC"/>
 </div>

 <div>
   <Who link="#Cases" >Check Our Cases</Who>

   <DentalTeam/>
   <AUX>
   <Vision/>
   <Mission/>
  
   </AUX>
<QualityControl/>

<h1 className={classes.App}>Cases</h1>

<Cases/>

<Reviews/>

<Contact link={"https://www.facebook.com/Midtowndentalclinic1"} link1={"https://www.instagram.com/midtown_dentalclinic/"} /> 

 </div>
 <div>
 
 </div>
 
 
</div>
    
    );


  

};
};

export default App;
