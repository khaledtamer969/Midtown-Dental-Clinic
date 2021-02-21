import React, { Component } from "react";
import { Slide } from "react-slideshow-image";
import "./SlidshowOperative.module.css";
import "react-slideshow-image/dist/styles.css";
import pic from './Collage 2020-07-12 03_19_28.jpg';
import pic1 from './Collage 2020-08-29 19_16_23.jpg';
import pic2 from './Collage 2020-11-08 16_06_05.jpg';
import pic3 from './Collage 2020-11-12 22_59_09__01.jpg';
import pic4 from './Collage 2021-02-08 16_31_10__01.jpg';
import pic5 from './IMG_20200904_135138_944.jpg';
import pic6 from './IMG_20200905_182008_282.jpg';
import pic7 from './IMG_20200911_152607_351.jpg';
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
    pic,pic1,pic2,pic3,pic4,pic5,pic6,pic7
   
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
