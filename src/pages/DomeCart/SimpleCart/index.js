import React from 'react';


export default function SimpleCart(props) {
    const{
    
    children, fill='',hight='',width='',padding='0px',marign='',shadow = '',
    }=props;

return React.Children.map(children,child=>{
  

    return (
        <div style={
            {
                backgroundColor:`${fill}`,
                width:`${width}`,
                padding:`${padding}`,
              margin:`${marign}`,
              hight:`${hight}`,
              boxShadow: `${shadow}`,

            }  
        }>
           {child}
        </div>
          )
        } )
}