import React from 'react';
import OverlaySelector  from 'zero-element-boot/lib/components/OverlaySelector'
import Default  from '@/components/indicator/CircularCheckboxIndicator'
import Selected  from '@/components/indicator/CircularCheckboxIndicator/Selected'
import SimpleCart from '@/pages/DomeCart/SimpleCart'
import ItemPlaceholder from 'zero-element-boot/lib/components/presenter/ItemPlaceholder'
import Cart from 'zero-element-boot/lib/components/cart/Cart';
import ShadowIndicator from 'zero-element-boot/lib/components/indicator/ShadowIndicator';
 
import BingDefault  from '@/components/indicator/BingUnderBarSelected/index'
import BingSelected  from '@/components/indicator/BingUnderBarSelected/Selected'

import BorderDefault  from '@/components/indicator/BorderStyleSelected'
import BordeSelected  from '@/components/indicator/BorderStyleSelected/Selected'

export default function index (props) {
    return (
        <>
        <Cart margin='20px' padding='0' linewidth='0'>
            <OverlaySelector defaultIndicator={BingDefault} 
                            hoverIndicator={ShadowIndicator}
                            selectedIndicator={BingSelected}  selected >
                {/* <div  style={{backgroundColor: '#ffffff',height:'70px'}}>111111111111111111111111111111111</div> */}
                <ItemPlaceholder bg='' />
            </OverlaySelector>
        </Cart>

        <Cart margin='20px' padding='0' linewidth='0'>
        <OverlaySelector defaultIndicator={BorderDefault} 
                            hoverIndicator={ShadowIndicator} hoverIndicatorProps={{padding:'0', borderRadius: '10px',}}
                            selectedIndicator={BordeSelected}  selected >
                <ItemPlaceholder  bg='' />
        </OverlaySelector>
        </Cart>

    


        <Cart margin='20px' padding='0' linewidth='0'>
         <OverlaySelector defaultIndicator={Default} 
                         hoverIndicator={ShadowIndicator}
                         selectedIndicator={Selected}  selected >
            <ItemPlaceholder bg='' />
        </OverlaySelector>
        </Cart>
        </>

        // <Default style={{position: 'relative'}}>
        //     <div  style={{backgroundColor: '#ff0000',height:'70px'}}>11111</div>
        // </Default>
    )

}