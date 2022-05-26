import React from 'react';
import NamedCart from 'zero-element-boot/lib/components/NamedCart'
import ItemPlaceholder from '@/pages/ItemPlaceholder'
import {   APIContainer } from 'zero-element-boot';

/**
 *
 * 
 * @returns 
 */
 

export default function NamedCartItemPlaceholder(props) {

    // const {xname, props, ...rest}=prop
     console.log("style==", props )

    return (
        // <APIContainer API='/api/detailData'>
        //  <NamedCart {...props}>
             <ItemPlaceholder  fill='#ada0b2' bg='rgb(192,192,192,0.3)' />
        //  </NamedCart>
         /* </APIContainer> */
    )
}

//[x: string]: any;
// children: any;
// xname: any;
// indicator: any;
// selector: any;
// defaultIndicator: any;
// props: any;
// cart?: {
//     xname: any;
//     props: any;


