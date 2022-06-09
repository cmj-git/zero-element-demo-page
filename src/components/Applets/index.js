import React from 'react';

import Cart from 'zero-element-boot/lib/components/cart/Cart';
import { Flex } from '@chakra-ui/react'
import CssCart from '@/components/css/CssCart';


export default  function Index(props) {

  const { children,title='小程序'} = props;

  return (
    <div style={ {background: '#f0f0f0', padding:' 0',margin:'20px', borderRadius:'10px' ,boxShadow :' 0 2px 6px rgba(0, 0, 0, 0.1)'}}>
        <Cart  fill='#ffffff' linewidth='0' corner ='10px 10px 0 0'padding='auto auto 60px auto'margin='0' >
            <Flex justify='end'>
            <div style={ {
                margin: 'auto',
                padding:'auto',
                color:'',
                fontSize:'30px',
                fontWeight:'',
                       }}>
                       {title}
                       </div>
                <CssCart borderWidth='1px ' borderStyle ='solid' borderColor ='#e1e1e1' borderRadius='60px' padding='0'margin='10px' width='152px'height='50px' >
                    <svg  width='' height='48px'>
                        <circle cx="20%" cy="50%" r="1.5" stroke="black" stroke-width="3" fill="" />
                        <circle cx="29%" cy="50%" r="4" stroke="black" stroke-width="3" fill="" />
                        <circle cx="38%" cy="50%" r="1.5" stroke="black" stroke-width="3" fill="" />
                        <rect width="1" height="36px" x="50%" y="12%" fill='#e2e2e2'></rect>
                        <circle cx="80%" cy="50%" r="14" stroke="black" stroke-width="3.5" fill="transparent" />
                        <circle cx="80%" cy="50%" r="6" stroke="black" stroke-width="1" fill="" />
                    </svg>
                </CssCart>
            </Flex>
       </Cart>
      {
        React.Children.map(children, child =>(
          child
        ))
      }
  </div>
  )
}