import React from 'react';
import Style from './index.less';
// require('@/components/indicator/BorderStyleSelected/index.less');

/**
 */

export default function Index(props) {

  const { children ,fill='#e8e8e8'} = props;

  const styles = {
    position: 'relative',
    // margin: '1px 6px 1px 6px',
    padding: '0',
    borderRadius: '10px',
    borderWidth: '3px',
    borderStyle: 'solid',
    width:'100%',
    height:'100%',
    backgroundColor: 'transparent',
    borderColor: `${fill}`,
    // boxShadow: '0 0px 4px rgba(0, 0, 0, 0.3)',
  }

console.log(Style,'== Style')
  return (
    <div style={styles}>

      <div className={ Style.right_icon_on} ></div>

      {
        React.Children.map(children, child =>(
          child
        ))
      }
      
    </div>
  )
}