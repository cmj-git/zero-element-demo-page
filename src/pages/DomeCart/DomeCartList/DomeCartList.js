import React from 'react';
import Cart from 'zero-element-boot/lib/components/cart/Cart';
import ItemPlaceholder from '@/pages/ItemPlaceholder'
import NamedCart from 'zero-element-boot/lib/components/NamedCart'
import { Flex, Text, Center } from '@chakra-ui/react'
import CheckBoxIndicatorCart from 'zero-element-boot/lib/components/indicator/CheckBoxIndicatorCart';
import Flexbox from 'zero-element-boot/lib/components/layout/Flexbox';
import SimpleCart from '@/pages/DomeCart/SimpleCart'




/**
 *
 * 
 * @returns 
 */


export default function DomeCartList(props) {
    console.log('CartItemPlaceholder==', props)

    const { cart, fontSize, color, title,margin } = props

    const { selected } = cart

    console.log("xname===", cart)
    return (

        
        <Flex>
            <SimpleCart margin={margin}>
                <NamedCart cart={cart}>
                    <ItemPlaceholder indicate={selected} fill={cart.stroke}/>
                </NamedCart>
            </SimpleCart>

                <Center>
                    <Text fontSize='3xl' color='#999ca1'>{cart.xname}</Text>
                </Center>
        </Flex>

    )
}