import React from 'react';
import { Box, Flex } from '@chakra-ui/react'
import Rectangle from 'zero-element-boot/lib/components/presenter/Rectangle';
import Cart from 'zero-element-boot/lib/components/cart/Cart';

/**
 * 
 * @param {color} fill 圆、矩形背景色
 * @param {color} bg 背景色
 * @param {width/height} size 圆和矩形的尺寸
 * 
 */

export default function ItemPlaceholder(props) {

   const { fill = '#e0e4e4', bg = '',size='90px' } = props

   return (
      <Cart fill={bg} paddin='0'>
         < Flex >
                  <Rectangle margin='1%' width={size} height={size} fill={fill} corner='50%' />

                  <Box as='span' fontWeight='bold' fontSize='lg' width={size} height={size}  p={4}>

                     <Rectangle margin='12%' width='260%' height='30%' fill={fill} />

                     <Rectangle margin='12%' width='140%' height='15%' fill={fill} />

                     <Rectangle margin='12%' width='140%' height='15%' fill={fill} />

                  </Box>
         </Flex>
     </Cart>
         

   )
}