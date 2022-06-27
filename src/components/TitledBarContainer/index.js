import React, { useState, useEffect,useBoolean } from 'react';
import Cart from 'zero-element-boot/lib/components/cart/Cart';
import CssCart from 'zero-element-boot/lib/components/cart/CssCart';
import { Radio, RadioGroup, Button,Flex,Stack,ChakraProvider } from '@chakra-ui/react'

/**
 * 
 * @param {deviceModel} deviceModel 设备型号
 * @param {title} title 标题
 * 
 *  deviceModel={ iPhoneSE iPhoneXR iPhone12Pro Pixel5 SamsungGalaxyS8+ iPadAir iPadMini} 
 * 
 * @returns 
 */


export default  function Index(props) {


const {children,style , title,...rest}=props

  return (
    <div style={style}>
      {
       React.Children.map(children, child => {
        return React.cloneElement(child, {
        ...rest
        })
    })
      }
       <div style={ { margin: 'auto', padding:'auto', color:'',fontSize:'24px',fontWeight:'bold', }}>
                       {title}
                </div>
            <Flex justify='end'>

                <CssCart borderWidth='1px ' borderStyle ='solid' borderColor ='#e1e1e1' borderRadius='62px' padding='0'margin='10px' width='120px'height='40px' >
                    <svg  width='' height='38px'>
                        <circle cx="20%" cy="50%" r="1" stroke="black" strokeWidth="3" fill="" />
                        <circle cx="29%" cy="50%" r="2.8" stroke="black" strokeWidth="3" fill="" />
                        <circle cx="38%" cy="50%" r="1" stroke="black" strokeWidth="3" fill="" />
                        <rect width="1" height="26px" x="50%" y="14%" fill='#e2e2e2'></rect>
                        <circle cx="80%" cy="50%" r="10" stroke="black" strokeWidth="3" fill="transparent" />
                        <circle cx="80%" cy="50%" r="3.5" stroke="black" strokeWidth="2" fill="" />
                    </svg>
                </CssCart>
                </Flex>
  </div>
  )
}