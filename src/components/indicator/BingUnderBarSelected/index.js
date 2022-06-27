import React from 'react';



export default  function Index(props) {

  const { children, ...style } = props;


  const styles = {
    position: 'relative',
    borderColor: 'transparent',
    boxShadow: '0 0px 4px rgba(0, 0, 0, 0.1)',
    borderRadius:'4PX',
    margin:'0',
    height:'100%',
    widht:'100%'
  }
  return (
    <div style={styles}>
      {
        React.Children.map(children, child =>(
          child
        ))
      }
      
      {/* {title} */}
  </div>
  )
}