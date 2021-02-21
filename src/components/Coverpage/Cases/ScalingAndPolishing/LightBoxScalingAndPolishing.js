import React from 'react';
import pic from './2020_12_16_18_13_13_309.jpg';
import pic1 from './Collage 2020-07-17 02_01_36.jpg';
import pic2 from './Collage 2020-07-17 02_04_38.jpg';
import pic3 from'./Collage 2021-01-11 21_51_49-01.jpg';
import pic4 from'./Collage 2021-02-15 19_48_08.jpg';
import { SRLWrapper } from "simple-react-lightbox";
import classes from './LightBoxScalingAndPolishing.module.css';
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
        <img src={pic4}alt="1"/>
        </div>
    </SRLWrapper>
  );
}

export default lightbox;