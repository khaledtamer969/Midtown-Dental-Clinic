import React, { Component } from "react";
import { Slide } from "react-slideshow-image";
import "./SlidshowSP.module.css";
import "react-slideshow-image/dist/styles.css";
import pic from './2020_12_16_18_13_13_309.jpg';
import pic1 from './Collage 2020-07-17 02_01_36.jpg';
import pic2 from './Collage 2020-07-17 02_04_38.jpg';
import pic3 from'./Collage 2021-01-11 21_51_49-01.jpg';
import pic4 from'./Collage 2021-02-15 19_48_08.jpg';
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
      autoplay:false,
      transitionDuration: 500,
      arrows: true,
      infinite: true,
      easing: "ease",
    };
    const slideImages = [
    pic,pic1,pic2,pic3,pic4
   
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
