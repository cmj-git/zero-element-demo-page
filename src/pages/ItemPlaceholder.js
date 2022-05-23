import React from 'react';
import { Box,Tabs, Center,TabList, TabPanels, Tab, TabPanel  } from '@chakra-ui/react'
import { Butter, Clean, Pink } from 'zero-element-boot/lib/components/presenter/default'
import Flexbox from 'zero-element-boot/lib/components/layout/Flexbox'
import PageCart from 'zero-element-boot/lib/components/cart/PageCart';
import Circle from 'zero-element-boot/lib/components/cart/Circle';
// import Cart from 'zero-element-boot/lib/components/cart/Cart';
import Rectangle from '@/pages/TestCart/Rectangle';


export default function ItemPlaceholder(props) {

    const { width='90px',height='90px',fill='#edf0fd',bg='#ffffff' } = props


/**
 * 
 * @param {color} fill 圆、矩形背景色
 * @param {color} bg 背景色
 * @param {width} width 宽度
 * @param {height} height 高度
 * 
 * 
 */



    console.log('w,h,b ==', width,height,fill)

    return (

   <Center w='300px' h='140px' bg={bg}>
       <Rectangle  margin='10px' width={width} height={height} fill={fill} corner='50%'/>


       {/* <Center w='50%' h='80%'> */}
          <Box as='span' fontWeight='bold' fontSize='lg'width='70%'height='96%'>

             <Rectangle   margin='8%' width='80%' height='20%'fill={fill}/>

             <Rectangle  margin='8%' width='70%' height='10%'fill={fill}/>

             <Rectangle  margin='8%' width='70%' height='10%'fill={fill}/>

          </Box>
   
       {/* </Center> */}

</Center>

    )
}