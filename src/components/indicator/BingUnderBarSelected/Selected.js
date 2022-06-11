import React from 'react';

/**
 * 
 * @param {color} fill 线条的颜色
 * @param {像素} size 线条的宽度
 * @param { top、bottom、left、right} direction 线条的方位
 * 
 */

const map = {
    'top': 'borderTop',
    'bottom': 'borderBottom',
    'left': 'borderLeft',
    'right': 'borderRight',
}

export default  function Index(props) {

  const { children,fill='#ff0000',size='4px', direction='bottom' }= props;

  const styleProps = {
    position: 'relative',
    boxShadow: '0 0px 6px rgba(0, 0, 0, 0.2)',
    borderRadius:'4PX',
    margin:'10px',
    width:'100%',
    height:'100%',
  }

  styleProps[map[direction]] = `${fill} solid ${size}`

  console.log(styleProps,'==style');
  

  return (
    <div style={styleProps}>
      {
        React.Children.map(children, child =>(
          child
        ))
      }
        
      
  </div>
  )
   
}