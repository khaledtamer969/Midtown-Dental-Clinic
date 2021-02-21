import React, { Component } from "react";
import { Slide } from "react-slideshow-image";
import "./SlidshowCrowns.module.css";
import "react-slideshow-image/dist/styles.css";
import pic from './Collage 2019-12-31 23_10_51.jpg';
import pic1 from './Collage 2020-11-12 22_46_19.jpg';
import pic2 from './Collage 2020-11-12 23_20_38.jpg';
import pic3 from './Collage 2021-02-15 19_49_00.jpg';
import pic4 from './Collage 2021-02-15 20_02_03.jpg';
import pic5 from './Collage 2021-02-15 20_05_15.jpg';
import pic6 from './FB_IMG_1613221795244.jpg';
import pic7 from './IMG_20191227_153112_246.jpg';
import pic8 from './IMG_20200724_224459_585.jpg';
import pic9 from './IMG_20201121_233606_881.jpg';
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
