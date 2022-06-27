// import React from 'react';
// import Button from '@/components/presenter/button/Button'
// import WxPage from '@/components/WxPage';
// import Cart from 'zero-element-boot/lib/components/cart/Cart';
// // import ItemPlaceholder from 'zero-element-boot/lib/components/presenter/ItemPlaceholder'
// import ItemPlaceholder from '@/pages/ItemPlaceholder'



// export default function index(props) {

//     const onHandleButtonClick = (ButtonClick) => {
//         console.log('ButtonClick == ', ButtonClick)
//     }

//     return (
//         <>
//             <Button navigation='/GetPath?id=34&name=34' solid  add color='#2c7ad6' >
//                 Button
//               </Button>

//         </>
//     )
// }



import React from 'react';
import Button from '@/components/presenter/button/Button'
import WxPage from '@/components/WxPage';
import Cart from 'zero-element-boot/lib/components/cart/Cart';
// import ItemPlaceholder from 'zero-element-boot/lib/components/presenter/ItemPlaceholder'
import ItemPlaceholder from '@/pages/ItemPlaceholder'
import OnDefaultNewItemIndicator from '@/components/indicator/OnDefaultNewItemIndicator'



export default function index(props) {

    const onHandleButtonClick = (ButtonClick) => {
        console.log('ButtonClick == ', ButtonClick)
    }

    return (
        <>
            <OnDefaultNewItemIndicator >
                Button
              </OnDefaultNewItemIndicator>

        </>
    )
}