import React from 'react';
import checkOff from '@/assets/check_off.svg';
require('./index.less');

/**
 */

export default  function Index(props) {

  const { children, defaultHoverStyles={} } = props;

  console.log( ' props === ', props)

  const styles = {
    margin: '0',
    padding:'0',
    position: 'relative',
    borderRadius: '8px',
    backgroundColor: 'rgb(192,192,192,0.2)',
    borderColor: 'transparent',
    // boxShadow: '0 0px 6px rgba(255, 255, 255, 1)',
    ...defaultHoverStyles
  }

  return (
    <div style={styles}>
      
      {
        React.Children.map(children, child =>(
          child
        ))
      }
  </div>
  )
}