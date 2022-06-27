import React from 'react';
import OverlaySelector from 'zero-element-boot/lib/components/OverlaySelector'
import OnDeleteIndicator from '@/components/indicator/OnDeleteIndicator'
import CircularCheckboxIndicatorSelected from '@/components/indicator/CircularCheckboxIndicator/Selected'
import Hover from '@/components/indicator/CircularCheckboxIndicator/Hover'
import ShadowIndicator from 'zero-element-boot/lib/components/indicator/ShadowIndicator';
import Cart from 'zero-element-boot/lib/components/cart/Cart';
// import ItemPlaceholder from 'zero-element-boot/lib/components/presenter/ItemPlaceholder'
import ItemPlaceholder from '@/pages/ItemPlaceholder'
import CssCart from 'zero-element-boot/lib/components/cart/CssCart';



export default function index(props) {
    return (
        <>
            <CssCart margin='' padding='0' width='100%' >
                <OverlaySelector defaultIndicator={OnDeleteIndicator}
                    hoverIndicator={Hover}
                    selectedIndicator={CircularCheckboxIndicatorSelected} selected >
                    <Cart margin='0px' padding='0' linewidth='1px' shadow='0 2px 8px rgba(0, 0, 0, 0.15)'>
                        <ItemPlaceholder bg='' />
                    </Cart>
                </OverlaySelector>
                
            </CssCart>

        </>
    )
}