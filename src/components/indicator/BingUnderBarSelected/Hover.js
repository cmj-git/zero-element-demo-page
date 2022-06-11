import React from 'react';



export default  function Index(props) {

  const { children,  } = props;


  const styles = {
    position: 'relative',
    borderColor: 'transparent',
    boxShadow: '0 0px 6px rgba(0, 0, 0, 0.2)',
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
  </div>
  )
}