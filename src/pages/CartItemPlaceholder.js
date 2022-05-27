import React from 'react';
import Cart from 'zero-element-boot/lib/components/cart/Cart';
import ItemPlaceholder from '@/pages/ItemPlaceholder'
import NamedCart from 'zero-element-boot/lib/components/NamedCart'



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
    console.log('CartItemPlaceholder==',props )

    // const {fill='',  corner='4px', stroke='solid', linewidth='1px', margin='4px',padding='',}=props
    const {cart={}}=props

console.log("xname===",cart)
    return (
        // <Cart fill={fill} margin={margin} padding={padding} corner={corner} stroke={stroke} linewidth= {linewidth}>
        //   <ItemPlaceholder  bg='rgb(192,192,192,0.3)' />
        // </Cart>
           <NamedCart cart={cart}>
              <ItemPlaceholder  />
           </NamedCart>
    )
}