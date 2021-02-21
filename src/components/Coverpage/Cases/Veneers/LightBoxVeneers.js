import React from 'react';
import pic from './Collage 2021-01-18 00_41_36.jpg';
import pic1 from './Watermark_1577828319688.jpg';
import pic2 from './Collage 2021-01-20 20_41_57-01.jpg';
import pic3 from'./IMG_20200119_173922_580.jpg';
import { SRLWrapper } from "simple-react-lightbox";
import classes from './LightBoxVeneers.module.css';
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