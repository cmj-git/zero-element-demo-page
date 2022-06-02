import React from 'react';
import { Cart, Circle,HightlightCart,HoverShadowCart,Rectangle,Round,SelectCart} from 'zero-element-boot/lib/components/cart/';

import ItemPlaceholder from '@/pages/ItemPlaceholder'
import NamedCart from 'zero-element-boot/lib/components/NamedCart'
import { Flex, Text, Center,Box } from '@chakra-ui/react'
import CheckBoxIndicatorCart from 'zero-element-boot/lib/components/indicator/CheckBoxIndicatorCart';
import Flexbox from 'zero-element-boot/lib/components/layout/Flexbox';
import SimpleCart from '@/pages/DomeCart/SimpleCart'




/**
 *
 * 
 * @returns 
 */


export default function IndicatorCollection(props) {
    console.log('CartItemPlaceholder==', props)

    
    return (

        // <ChakraProvider>
            <Center bg='#f4f3f2'>
                <Box>
                    <SimpleCart padding='0px'marign='20px'>
                        <Cart>
                            <ItemPlaceholder/>
                         </Cart>
                    </SimpleCart>

                    <SimpleCart  padding='0px'marign='20px' >
                        <HightlightCart>
                            <ItemPlaceholder/>
                         </HightlightCart>
                    </SimpleCart>

                    <SimpleCart  padding='0px'marign='20px'>
                        <HoverShadowCart>
                            <ItemPlaceholder/>
                         </HoverShadowCart>
                    </SimpleCart>

                    <SimpleCart  padding='0px'marign='20px'>
                        <Rectangle>
                            <ItemPlaceholder/>
                         </Rectangle>
                    </SimpleCart>

                    <SimpleCart padding='0px'marign='20px'>
                        <Round>
                            <ItemPlaceholder/>
                         </Round>
                    </SimpleCart>

                    <SimpleCart padding='0px'marign='20px'>
                        <SelectCart>
                            <ItemPlaceholder/>
                         </SelectCart>
                    </SimpleCart>

                   
                 </Box>
            </Center>
    //  </ChakraProvider>
        

    )
}