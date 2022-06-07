import React from 'react';
import OverlaySelector  from 'zero-element-boot/lib/components/OverlaySelector'
import Default  from '@/components/indicator/CircularCheckboxIndicator'
import Selected  from '@/components/indicator/CircularCheckboxIndicator/Selected'
import SimpleCart from '@/pages/DomeCart/SimpleCart'
import ItemPlaceholder from 'zero-element-boot/lib/components/presenter/ItemPlaceholder'
import Cart from 'zero-element-boot/lib/components/cart/Cart';
import shadowHover from '@/components/shadowHover';
 

export default function index (props) {
    return (
        <>
        <Cart margin='20px' padding='0' linewidth='0'>
            <OverlaySelector defaultIndicator={Default} 
                            hoverIndicator={shadowHover}
                            selectedIndicator={Selected}  selected >
                {/* <div  style={{backgroundColor: '#ffffff',height:'70px'}}>111111111111111111111111111111111</div> */}
                <ItemPlaceholder size='80px' bg='' />
            </OverlaySelector>
        </Cart>

        <Cart margin='20px' padding='0' linewidth='0'>
        <OverlaySelector defaultIndicator={Default} 
                            hoverIndicator={shadowHover}
                            selectedIndicator={Selected}  selected >
                <ItemPlaceholder size='80px' bg='' />
        </OverlaySelector>
        </Cart>



        <Cart margin='20px' padding='0' linewidth='0'>
         <OverlaySelector defaultIndicator={Default} 
                         hoverIndicator={shadowHover}
                         selectedIndicator={Selected}  selected >
            <ItemPlaceholder size='80px' bg='' />
        </OverlaySelector>
        </Cart>
        </>

        // <Default style={{position: 'relative'}}>
        //     <div  style={{backgroundColor: '#ff0000',height:'70px'}}>11111</div>
        // </Default>
    )

}