import React from 'react';
import pic from './Collage 2020-11-17 03_19_23.jpg';
import pic1 from './Collage 2020-12-24 18_45_32.jpg';
import pic2 from './IMG_20201117_000449_472.jpg';
import { SRLWrapper } from "simple-react-lightbox";
import classes from './LightBox.module.css';
// USE THE IMPORT BELOW INSTEAD IF YOU ARE USING THE PRO VERSION
// import { SRLWrapper } from 'simple-react-lightbox-pro'

const lightbox =()=> {
  return (
    <SRLWrapper >
        <div className={classes.LightBox}>
        <img src={pic}alt="1"/>
        <img src={pic1}alt="1"/>
        <img src={pic2}alt="1"/>
        </div>
    </SRLWrapper>
  );
}

export default lightbox;