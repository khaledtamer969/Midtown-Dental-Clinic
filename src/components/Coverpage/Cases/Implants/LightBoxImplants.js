import React from 'react';
import pic from './Watermark_1577828582195.jpg';
import { SRLWrapper } from "simple-react-lightbox";
import classes from './LightBoxImplants.module.css';
// USE THE IMPORT BELOW INSTEAD IF YOU ARE USING THE PRO VERSION
// import { SRLWrapper } from 'simple-react-lightbox-pro'

const lightbox =()=> {
  return (
    <SRLWrapper >
        <div className={classes.LightBox}>
        <img src={pic}alt="1"/>
  
        </div>
    </SRLWrapper>
  );
}

export default lightbox;