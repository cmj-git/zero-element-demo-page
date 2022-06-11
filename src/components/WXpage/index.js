import React from 'react';
import Cart from 'zero-element-boot/lib/components/cart/Cart';
import { Flex } from '@chakra-ui/react'
import CssCart from '@/components/css/CssCart';

/**
 * 
 * @param {Model} Model 设备型号
 * @param {title} title 标题
 * 
 *  Model={ iPhoneSE iPhoneXR iPhone12Pro Pixel5 SamsungGalaxyS8+ iPadAir iPadMini} 
 * 
 * @returns 
 */



export default  function Index(props) {

  const { children,title='小程序' ,Model='iPhoneSE'} = props;
    
  const map = {
       "iPhoneSE": { width: '375px', height:'667px' },
       "iPhoneXR": { width: '414px', height:'896px' },
       "iPhone12Pro": { width: '390px', height:'844px' },
       "Pixel5": { width: '393px', height:'851px' },
       "SamsungGalaxyS8+": { width: '360px', height:'740px' },
       "iPadAir": { width: '820px', height:'1180px' },
       "iPadMini": { width: '768px', height:'1024px' },
   }

  const styleProps={
    background: '#f0f0f0',
     padding:' 0',
     margin:'20px', 
     borderRadius:'10px' ,
     boxShadow :' 0 2px 6px rgba(0, 0, 0, 0.1)',
     ...map[Model]
  }
//   console.log( styleProps,'==Props');
  
  return (
    <div style={styleProps}>
        <Cart  fill='#ffffff' linewidth='0' corner ='10px 10px 0 0'padding='auto auto 60px auto'margin='0' >
            <Flex justify='end'>
                <div style={ { margin: 'auto', padding:'auto', color:'',fontSize:'24px',fontWeight:'', }}>
                       {title}
                </div>
                <CssCart borderWidth='1px ' borderStyle ='solid' borderColor ='#e1e1e1' borderRadius='62px' padding='0'margin='10px' width='120px'height='40px' >
                    <svg  width='' height='38px'>
                        <circle cx="20%" cy="50%" r="1" stroke="black" stroke-width="3" fill="" />
                        <circle cx="29%" cy="50%" r="2.8" stroke="black" stroke-width="3" fill="" />
                        <circle cx="38%" cy="50%" r="1" stroke="black" stroke-width="3" fill="" />
                        <rect width="1" height="26px" x="50%" y="14%" fill='#e2e2e2'></rect>
                        <circle cx="80%" cy="50%" r="10" stroke="black" stroke-width="3" fill="transparent" />
                        <circle cx="80%" cy="50%" r="3.5" stroke="black" stroke-width="2" fill="" />
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