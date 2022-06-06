import React from 'react';
import { Cart, HightlightCart,HoverShadowCart,Rectangle,Round,SelectCart} from 'zero-element-boot/lib/components/cart/';

import { Center,Box } from '@chakra-ui/react'
import ItemPlaceholder from 'zero-element-boot/lib/components/presenter/ItemPlaceholder'




/**
 *
 * 
 * @returns 
 */


export default function IndicatorCollection(props) {
    console.log('CartItemPlaceholder==', props)

    
    return (

            <Center bg='#f2f0f0'>
                <Box>
                    <Cart padding='0px'margin='40px'linewidth='0'>
                        <Cart>
                            <ItemPlaceholder/>
                         </Cart>
                    </Cart>

                    <Cart  padding='0px'margin='40px' linewidth='0'>
                        <HightlightCart>
                            <ItemPlaceholder/>
                         </HightlightCart>
                    </Cart>

                    <Cart  padding='0px'margin='40px' linewidth='0'>
                        <HoverShadowCart>
                            <ItemPlaceholder/>
                         </HoverShadowCart>
                    </Cart>

                    <Cart  padding='0px'margin='40px' linewidth='0'>
                        <Rectangle>
                            <ItemPlaceholder/>
                         </Rectangle>
                    </Cart>

                     <Cart  padding='0px'margin='40px' linewidth='0'>
                        <Round>
                            <ItemPlaceholder/>
                         </Round>
                    </Cart>

                    <Cart  padding='0px'margin='40px' linewidth='0'>
                        <SelectCart>
                            <ItemPlaceholder/>
                         </SelectCart>
                    </Cart>

                   
                 </Box>
            </Center>
        

    )
}