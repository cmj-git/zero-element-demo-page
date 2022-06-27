import React, { useState, useEffect } from 'react';
import AutoComponentSet from './index';
import CssCart from 'zero-element-boot/lib/components/Cart/CssCart';
import PageCart from '@/components/PageCart';
import HCenter from '@/components/HCenter';




export default function (props) {


    let endpoint=' http://app1.console.smallsaas.cn:8001'

    const onHandleItemClick = (item) => {
        console.log(item, ' ======== item')
    }
    
    return (
                <HCenter>
                        <AutoComponentSet   onItemClick={onHandleItemClick} endpoint={endpoint}/>
                </HCenter>

    )

}