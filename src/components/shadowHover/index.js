import React from 'react';



export default  function Index(props) {

  const { children, ...defaultHoverStyles } = props;


  const styles = {
    position: 'relative',
    backgroundColor: 'rgb(192,192,192,0.1)',
    borderColor: 'transparent',
    boxShadow: '0 0px 8px rgba(0, 0, 0, 0.15)',
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