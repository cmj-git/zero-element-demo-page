import React,{forwardRef, useState } from 'react';


export default forwardRef(function PageCart(props, ref){

    const {display='flex', alignItems='center', backgroundColor='#ffffff', children, width='100%', height='100%', cursor='pointer', justifyContent="center"}=props

    // const [onHover, setOnHover] = useState(false);

    // const toggleHover = () => {
    //   const result = !onHover;
    //   setOnHover(result)
    // }
    // const toggleDisplay = () => {
    //   const result = !onDisplay;
    //   setOnDisplay(result)
    // }
    // let theDisplay="block";
    // if(onDisplay){
    //   theDisplay="none";
    // }else{
    //   theDisplay="block";
    // }

    // let bgColor = `${backgroundColor}80`;
    // if (onHover) {
    //   bgColor = `${backgroundColor}ff`;
    // } else {
    //   bgColor = `${backgroundColor}80`;
    // }
    
      return React.Children.map(children, child => {
        return <div style={{
          display: `${display}`,
          alignItems: `${alignItems}`,
          backgroundColor: `${backgroundColor}`,
          width:`${width}`,
          height:`${height}`,
          cursor:`${cursor}`,
          justifyContent:`${justifyContent}`,
        }}
        >
          {child}
        </div>
      })
    })
    // onMouseEnter={() => toggleHover()} onMouseLeave={() => toggleHover()}
