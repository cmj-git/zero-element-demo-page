import React from 'react';
import StyleDate from './index.less';

// require('./index.less');

/**
 */

export default function Index(props) {

  const { children ,fill='#0185fe'} = props;

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
    boxShadow: '0 0px 4px rgba(0, 0, 0, 0.3)',
  }


  return (
    <div style={styles}>
      <div  className={ StyleDate.right_icon_on}>
        <svg  width='58px' height='48px'>
                        <circle cx="50%" cy="56%" r="12" stroke={fill} strokeWidth="2.6" fill="#ffffff"/>
                        <line x1="12" y1="26" x2="17" y2="32" stroke={fill} strokeWidth='1.6' />
                        <line x1="24" y1="22" x2="17" y2="32" stroke={fill} strokeWidth='1.6' />
                    </svg>
      </div>
      {
        React.Children.map(children, child =>(
          child
        ))
      }
    </div>
  )
}
{/* <div  style={{position:'absolute',
right: '-18px',
top: '-50%',
width: '46px',
height: '100%',
display: 'flex',
alignItems:'center'} }>
<svg  width='58px' height='48px'>
            <circle cx="50%" cy="56%" r="12" stroke={fill} strokeWidth="2.6" fill="#ffffff"/>
            <line x1="16" y1="28" x2="20" y2="32" stroke={fill} strokeWidth='1.6' />
            <line x1="26" y1="22" x2="20" y2="32" stroke={fill} strokeWidth='1.6' />
        </svg>
</div> */}