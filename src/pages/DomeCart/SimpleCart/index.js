import React from 'react';


export default function Pink(props) {
    const{
       children, fill='',hight='',width='',padding='0px',marign='30px',
    }=props;

return React.Children.map(children,child=>{
  

    return (
        <div style={
            {
                backgroundColor:`${fill}`,
                width:`${width}`,
                padding:`${padding}`,
              margin:`${marign}`,
              hight:`${hight}`
            }  
        }>
           {child}
        </div>
          )
        } )
}