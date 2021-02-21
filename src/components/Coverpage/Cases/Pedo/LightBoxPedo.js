import React from 'react';
import pic from './Collage 2019-07-27 13_46_38.jpg';
import pic1 from './Collage 2021-02-15 19_52_00.jpg';

import { SRLWrapper } from "simple-react-lightbox";
import classes from './LightBoxPedo.module.css';
// USE THE IMPORT BELOW INSTEAD IF YOU ARE USING THE PRO VERSION
// import { SRLWrapper } from 'simple-react-lightbox-pro'

const lightbox =()=> {
  return (
    <SRLWrapper >
        <div className={classes.LightBox}>
        <img src={pic}alt="1"/>
        <img src={pic1}alt="1"/>
        </div>
    </SRLWrapper>
  );
}

export default lightbox;