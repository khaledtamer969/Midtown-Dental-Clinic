import React, { Component } from "react";
import { Slide } from "react-slideshow-image";
import "./Slidshow.module.css";
import "react-slideshow-image/dist/styles.css";
import pic from '../Collage 2020-11-17 03_19_23.jpg';
import pic1 from '../Collage 2020-12-24 18_45_32.jpg';
import pic2 from '../IMG_20201117_000449_472.jpg';
import GooglePhoto from 'react-google-photo';
class slideshow extends Component {
  constructor() {
    super();
    this.slideRef = React.createRef();
    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
    this.state = {
      current: 0
    };
  }

  back() {
    this.slideRef.current.goBack();
  }

  next() {
    this.slideRef.current.goNext();
  }

  render() {
    const properties = {
      duration: 4000,
      autoplay: false,
      transitionDuration: 500,
      arrows: true,
      infinite: true,
      easing: "ease",
    };
    const slideImages = [
    pic,pic1,pic2
   
    ];
    return (
        
      <div >
       
        <div className="slide-container">
          <Slide ref={this.slideRef} {...properties}>
            {slideImages.map((each, index) => (
              <div key={index} className="each-slide">
                <img className="lazy" src={each} alt="sample" />
                
              </div>
            ))}
          </Slide>
        </div>

       
       
        
      </div>
    );
  }
}

export default slideshow;
