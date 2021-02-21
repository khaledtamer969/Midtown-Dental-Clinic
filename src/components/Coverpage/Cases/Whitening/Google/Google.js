import React,{Component} from 'react';

import GooglePhoto from 'react-google-photo';
 
class Go extends   Component {
    constructor() {
        super();

  
 
const images = [
    {
      src:
        'https://images.unsplash.com/photo-1509420316987-d27b02f81864?dpr=1&auto=format&fit=crop&w=1500&q=80&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
      width: 1500,
      height: 1000,
    },
    
  ];
 
  return (
    <div>
      
      <GooglePhoto
        
        src={images}
       
      />
    </div>
  );
};
}
export default Go;