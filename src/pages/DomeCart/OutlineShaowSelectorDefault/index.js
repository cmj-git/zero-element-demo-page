import React from 'react';


export default function SimpleCartDefault(props) {
    const{
       children, fill='#ffffff',
       hight='',
       padding='0px',
       marign='',
       borderRadius= '8px',
       borderWidth= '2px',
       borderStyle='solid',
       borderColor='#f0f3f7',
       stroke='solid',
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
              borderColor: `${borderColor}`,
              borderStyle: `${stroke}`,
              borderRadius: `${corner}`,

            }  
        }>
           {child}
        </div>
          )
        } )
}