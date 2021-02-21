import React from 'react';
import pic from './Collage 2020-07-12 03_19_28.jpg';
import pic1 from './Collage 2020-08-29 19_16_23.jpg';
import pic2 from './Collage 2020-11-08 16_06_05.jpg';
import pic3 from './Collage 2020-11-12 22_59_09__01.jpg';
import pic4 from './Collage 2021-02-08 16_31_10__01.jpg';
import pic5 from './IMG_20200904_135138_944.jpg';
import pic6 from './IMG_20200905_182008_282.jpg';
import pic7 from './IMG_20200911_152607_351.jpg';
import { SRLWrapper } from "simple-react-lightbox";
import classes from './LightBoxOperative.module.css';
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
        <img src={pic5}alt="1"/>
        <img src={pic6}alt="1"/>
        <img src={pic7}alt="1"/>
        </div>
    </SRLWrapper>
  );
}

export default lightbox;