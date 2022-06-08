import React from 'react'

const Circle = ({ ...props}) => {
    return (
      <div
        style={props}
        className="circle"
      ></div>
    );
  };
  
  export default Circle;