import React from 'react';


/**
 * 
 * 
 * @returns 
 */
export default function index(props) {


  const {src,alt, ...style}=props;

    return <img  style={{ ...style}} src={src} alt={alt} />
//   })
}
