import React from 'react';
import pic from './IMG_20201107_232554.jpg';
import pic1 from './IMG_20201110_135830.jpg';
import pic2 from './IMG_20201130_161835.jpg';
import pic3 from './IMG_20210208_192012.jpg';
import { SRLWrapper } from "simple-react-lightbox";
import classes from './LightBoxEndo.module.css';
// USE THE IMPORT BELOW INSTEAD IF YOU ARE USING THE PRO VERSION
// import { SRLWrapper } from 'simple-react-lightbox-pro'

const lightbox =()=> {
  return (
    <SRLWrapper >
        <div className={classes.LightBox}>
        <img src={pic}alt="1"/>
        <img src={pic1}alt="1"/>
        <img src={pic2}alt="1"/>
        <img src={pic3}alt="1"/>
  
        </div>
    </SRLWrapper>
  );
}

export default lightbox;