import React from 'react';


export default function SimpleCart(props) {
    const{
    
    children, fill='',height='',width='',padding='0px',margin='',shadow = '',
    }=props;

return React.Children.map(children,child=>{
  

    return (
        <div style={
            {
                backgroundColor:`${fill}`,
                width:`${width}`,
                padding:`${padding}`,
              margin:`${margin}`,
              height:`${height}`,
              boxShadow: `${shadow}`,

            }  
        }>
           {child}
        </div>
          )
        } )
}