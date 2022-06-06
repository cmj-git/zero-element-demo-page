import React from 'react';


/**
 * 
 * 
 * @returns 
 */
export default function index(props) {


  const {src,alt, ...style}=props;



//   return React.Children.map(children, child => {
    return <img  style={{ ...style}} src={src} alt={alt} />
//   })
}
