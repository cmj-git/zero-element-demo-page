import React from 'react';


export default function SimpleCartDefault(props) {
    const{
       children, fill='#ffffff',
       hight='',
       padding='0px',
       marign='',
       borderRadius= '8px',
       borderWidth= '',
       stroke='solid',
       shadow = '0 0px 14px rgba(0, 0, 0, 0.14)',
       corner='4px'
       
    }=props;

return React.Children.map(children,child=>{
  

    return (
        <div style={
            {
                backgroundColor:`${fill}`,
                padding:`${padding}`,
              margin:`${marign}`,
              hight:`${hight}`,
              borderWidth: `${borderWidth}`,
              boxShadow: `${shadow}`,
              borderRadius: `${corner}`,

            }  
        }>
           {child}
        </div>
          )
        } )
}