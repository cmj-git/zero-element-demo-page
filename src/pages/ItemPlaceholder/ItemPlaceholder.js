import React from 'react';
import { Box, Tabs, Center, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Butter, Clean, Pink } from 'zero-element-boot/lib/components/presenter'
import Flexbox from 'zero-element-boot/lib/components/layout/Flexbox'
import PageCart from 'zero-element-boot/lib/components/cart/PageCart';
import Circle from 'zero-element-boot/lib/components/cart/Circle';
// import Cart from 'zero-element-boot/lib/components/cart/Cart';
import Rectangle from '@/pages/TestCart/Rectangle';

import checkOff from '@/assets/check_off.svg';
import checkOn from '@/assets/check_on.svg';
require('@/pages/ItemPlaceholder/ItemPlaceholder.less');
/**
 * 
 * @param {color} fill 圆、矩形背景色
 * @param {color} bg 背景色
 * @param {width} width 宽度
 * @param {height} height 高度
 * 
 * 
 */

export default function ItemPlaceholder(props) {

   const { width = '90px', height = '90px', fill = '#e0e4e4', bg = '',  indicate=''} = props




   console.log('w,h,b ==', width, height, fill)

   return (
      <div style={{ position: 'relative' }}>
         <Center w='100%' >
            <Center w='450px' h='140px' bg={bg}>
               <Rectangle margin='10px' width={width} height={height} fill={fill} corner='50%' />


               {/* <Center w='50%' h='80%'> */}
               <Box as='span' fontWeight='bold' fontSize='lg' width='76%' height='96%'>

                  <Rectangle margin='20px' width='192px' height='20%' fill={fill} />

                  <Rectangle margin='20px' width='96px' height='10%' fill={fill} />

                  <Rectangle margin='20px' width='96px' height='10%' fill={fill} />

               </Box>

               {/* </Center> */}

            </Center>
         </Center>

           <div className={ indicate ?  'right_icon_on' : 'right_icon_off'} >
            <img src={indicate ? checkOn : checkOff} />
          </div>
      </div>

   )
}