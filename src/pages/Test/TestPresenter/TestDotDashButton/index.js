
import React from 'react';
import Button from '@/components/presenter/button/Button'
import WxPage from '@/components/WxPage';
import Cart from 'zero-element-boot/lib/components/cart/Cart';
// import ItemPlaceholder from 'zero-element-boot/lib/components/presenter/ItemPlaceholder'
import ItemPlaceholder from '@/pages/ItemPlaceholder'
import DotDashButton from '@/components/presenter/button/DotDashButton'



export default function index(props) {

    const onHandleButtonClick = (ButtonClick) => {
        console.log('ButtonClick == ', ButtonClick)
    }

    return (
        <>
             <DotDashButton >
                Button
              </DotDashButton>

        </>
    )
}