import React from 'react'
// import PreviewAutoLayoutSelectedDefault from '@/components/indicator/PreviewAutoLayoutSelected'
import ItemPlaceholder from 'zero-element-boot/lib/components/presenter/ItemPlaceholder'
import CssCart from 'zero-element-boot/lib/components/cart/CssCart';
import PreviewAutoLayoutSelected from '@/components/indicator/PreviewAutoLayoutSelected'
import NamedCart from 'zero-element-boot/lib/components/NamedCart';


export default function index(){
   
    const onHandleLayoutClick = (LayoutClick) => {
        console.log('LayoutClick == ',LayoutClick)
    }
    
    const onHandlePresenterClick = (PresenterClick) => {
        console.log('PresenterClick == ',PresenterClick)
    }
    
    const onHandleIndicatorClick = (IndicatorClick) => {
        console.log('IndicatorClick == ',IndicatorClick)
    }
    
    const onHandleGatawayClick = (GatawayClick) => {
        console.log('GatawayClick == ',GatawayClick)
    }
    

    return(

            <CssCart width='420px'height='' padding='0px' backgroundColor=''>
                <PreviewAutoLayoutSelected onLayoutClick={onHandleLayoutClick} onPresenterClick={onHandlePresenterClick} onIndicatorClick={onHandleIndicatorClick} onGatawayClick={onHandleGatawayClick}  >
                    <CssCart width='260px' margin='10px'>
                        <ItemPlaceholder bg='#ffffff' />
                    </CssCart>
                </PreviewAutoLayoutSelected>
            </CssCart>

     

    )
}