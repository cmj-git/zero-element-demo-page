import React from 'react';
import Cart from 'zero-element-boot/lib/components/cart/Cart';
import ItemPlaceholder from '@/pages/ItemPlaceholder'
import NamedCart from 'zero-element-boot/lib/components/NamedCart'
import { Flex, Text, Center } from '@chakra-ui/react'
import CheckBoxIndicatorCart from 'zero-element-boot/lib/components/indicator/CheckBoxIndicatorCart';
import Flexbox from 'zero-element-boot/lib/components/layout/Flexbox';
import SimpleCart from '@/pages/DomeCart/SimpleCart'

import ContentCart from '@/pages/DomeCart/ContentCart/Content/index'


export default function DomeCartList(props) {
    console.log('CartItemPlaceholder==', props)

    const { cart, fontSize, title,margin } = props

    const { selected, color,C_fill } = cart

    console.log("xname===", cart)
    return (
        <Flex>
            <SimpleCart margin="10px">
                <NamedCart cart={cart}   >
                    <ContentCart fill={C_fill}  fontSize={fontSize} lineColor = {color} corner="16px">{title}</ContentCart>
                </NamedCart>
            </SimpleCart>
        </Flex>

    )
}