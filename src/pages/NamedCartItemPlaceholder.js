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

    // // const {cart, ...rest}=props
    // console.log("NamedCartItemPlaceholder==", cart )

    // return (
    //      <NamedCart {...cart} {...rest}>
    //          <ItemPlaceholder fill='#757790' bg='rgb(192,192,192,0.3)' />
    //      </NamedCart>


    const{ xname }=props
// console.log("===============", ...props)

         return (
            //  <Flex></Flex>
            //  <NamedCart xname={xname} >
                 <ItemPlaceholder  fill='#757790' bg='rgb(192,192,192,0.3)' />
             /* </NamedCart> */
    )
}


// props={{ padding: "0px" }} props={{lineColor:"rgb(192,192,192,0.3)" }}


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


