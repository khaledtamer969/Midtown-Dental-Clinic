import React, { Component } from "react";
import { Slide } from "react-slideshow-image";
import "./SlidshowA.module.css";
import "react-slideshow-image/dist/styles.css";
import pic from './Collage 2020-11-08 01_22_47.jpg';
import pic1 from './Collage 2021-02-15 19_53_30-1.jpg';
import pic2 from './Collage 2021-02-15 19_57_54-1.jpg';
import pic3 from './IMG_20200918_201431_933.jpg';
import pic4 from './IMG_20201113_130841_257.jpg';
import pic5 from './Watermark_1577828115930.jpg';
import pic6 from './Watermark_1577828180550.jpg';
import pic7 from './Watermark_1577828293787.jpg';
import pic8 from './Watermark_1577828411451.jpg';
import pic9 from './Watermark_1577828616070.jpg';
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
    pic, pic1, pic2, pic3,pic4,pic5,pic6,pic7,pic8,pic9
   
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
