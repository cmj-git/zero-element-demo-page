import React from 'react';

// import checkOff from '@/assets/check_off.svg';
import checkOn from '@/assets/check_on.svg';
require('./index.less');

/**
 */

export default function Index(props) {

  const { children ,fill='#0185fe'} = props;

  const styles = {
    position: 'relative',
    margin: '1px 6px 1px 6px',
    padding: '0',
    borderRadius: '10px',
    borderWidth: '3px',
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderColor: `${fill}`,
    boxShadow: '0 0px 4px rgba(0, 0, 0, 0.3)',
  }


  return (
    <div style={styles}>
      <div className={ 'right_icon_on'} >
        <svg  width='' height='48px'>
                        <circle cx="50%" cy="56%" r="12" stroke={fill} strokeWidth="2.6" fill="#ffffff"/>
                        <line x1="7" y1="26" x2="12" y2="32" stroke={fill} strokeWidth='1.6' />
                        <line x1="20" y1="22" x2="11" y2="32" stroke={fill} strokeWidth='1.6' />
                    </svg>
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill={fill} class="bi bi-check-circle" viewBox="0 0 16 16" background-color="#ffffff">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
          <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
        </svg> */}
      </div>
      {
        React.Children.map(children, child =>(
          child
        ))
      }
    </div>
  )
}