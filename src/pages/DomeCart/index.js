import React from 'react';
import Cart from 'zero-element-boot/lib/components/cart/Cart';
import ItemPlaceholder from '@/pages/ItemPlaceholder/ItemPlaceholder'
import NamedCart from 'zero-element-boot/lib/components/NamedCart'
import { Flex, Text, Center } from '@chakra-ui/react'
import CheckBoxIndicatorCart from 'zero-element-boot/lib/components/indicator/CheckBoxIndicatorCart';
import Flexbox from 'zero-element-boot/lib/components/layout/Flexbox';
import SimpleCart from '@/pages/DomeCart/SimpleCart'




/**
 *
 * @param {color} fill 背景 * 
 * @param {borderRadius} corner 圆角
 * @param {borderStyle} stroke 边框
 * @param {borderWidth} linewidth 边框线框
 * @param {margin} margin 边距
 * @param {padding} padding 内距
 * 
 * @returns 
 */


export default function CartItemPlaceholder(props) {
    console.log('CartItemPlaceholder==', props)

    const { cart, fontSize, color, title ,margin} = props

    const { selected,content_fill } = cart

    console.log("xname===", cart)
    return (
        <Flex>
            <SimpleCart margin={margin}>
                <NamedCart cart={cart}   >
                    <ItemPlaceholder indicate={selected} fill={content_fill}/>
                </NamedCart>
            </SimpleCart>

                <Center>
                    <Text fontSize={fontSize} color={color}>{title}</Text>
                </Center>
        </Flex>

    )
}