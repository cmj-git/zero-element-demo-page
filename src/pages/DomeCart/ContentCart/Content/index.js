import React from 'react';


export default function Content(props) {
    const{
       children, fill='',hight='',width='',corner = '4px', stroke = 'solid', linewidth = '', 
       margin = '', padding = '8px', shadow = '', lineColor = '',fontsize='18px',font=''
    }=props;

return React.Children.map(children,child=>{
  

    return (
        <div style={
            {
                background:`${fill}`,
                width:`${width}`,
                padding:`${padding}`,
              margin:`${margin}`,
              hight:`${hight}`,
              borderRadius: `${corner}`,
              borderStyle: `${stroke}`,
              boxShadow: `${shadow}`,
              borderWidth: `${linewidth}`,
              color:`${lineColor}`,
              fontSize:`${fontsize}`,
              fontWeight:`${{font}}`
            }  
        }>
           {child}
        </div>
          )
        } )
}