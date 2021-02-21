import React, { Component } from "react";
import { Slide } from "react-slideshow-image";
import "./SlidshowVeneers.module.css";
import "react-slideshow-image/dist/styles.css";
import pic from './Collage 2021-01-18 00_41_36.jpg';
import pic1 from './Watermark_1577828319688.jpg';
import pic2 from './Collage 2021-01-20 20_41_57-01.jpg';
import pic3 from'./IMG_20200119_173922_580.jpg';
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
    pic,pic1,pic2,pic3
   
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
