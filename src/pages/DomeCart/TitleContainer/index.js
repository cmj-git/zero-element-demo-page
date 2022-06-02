import React from 'react';


export default function TitleContainer(props) {
    const{
    
    children, title='',fontSize='',color='',textAlign='',space='',fontWeight=''
    }=props;

return React.Children.map(children,child=>{
  

    return (
        <div style={
            {
              color:`${color}`,
              fontSize:`${fontSize}`,
              textAlign: `${textAlign}`,
              margin:`0px 0px 0px ${space}`,
              fontWeight:`${fontWeight}`
            }  
        }>
        {title}
           {child}
        </div>
          )
        } )
}