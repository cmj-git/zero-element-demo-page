import React from 'react';
import ItemPlaceholder from 'zero-element-boot/lib/components/presenter/ItemPlaceholder'
import CssCart from 'zero-element-boot/lib/components/cart/CssCart';
import NamedCart from 'zero-element-boot/lib/components/NamedCart'


export default function index (props) {

    const {  defaultxname,indicator,selector,defaultIndicatorProps,hoverIndicatorProps,selectedIndicatorProps}=props

    return (
        <>
 
            <CssCart padding='20px' linewidth='0' width='420px'height='200px'margin='10px'>
                <NamedCart cart ={ { xname:'Cart', props:{margin:'20px', linewidth:'0' } }}
                        defaultIndicator={ defaultxname}
                        indicator={indicator}
                        selector={selector}  selected
                        > 
                        <ItemPlaceholder />
                </NamedCart>
            </CssCart>
           
        </>

    )

}


// <CssCart padding='20px' linewidth='0' width='420px'height='90px'margin='70px'>
// <NamedCart cart ={ { xname:'Cart', props:{margin:'20px', linewidth:'0' } }}
//         defaultIndicator='CircularCheckboxIndicatorDefault' defaultIndicatorProps={{padding:'40px'}}
//         indicator='ShadowIndicator' 
//         selector='CircularCheckboxIndicatorSelected' selectedIndicatorProps={{}} selected
//         > 
//         <ItemPlaceholder />
// </NamedCart>
// </CssCart>


// <CssCart padding='20px' linewidth='0' width='420px'height='90px' margin='70px'>
// <NamedCart cart ={ { xname:'Cart', props:{margin:'20px', linewidth:'0' } }}
//         defaultIndicator='BorderStyleSelectedDefault' defaultIndicatorProps={{padding:'40px' }}
//         indicator='ShadowIndicator' hoverIndicatorProps={{borderRadius:'10px'}}
//         selector='BorderStyleSelected' selectedIndicatorProps={{}} selected
//         > 
//         <ItemPlaceholder />
// </NamedCart>
// </CssCart>

// <CssCart padding='20px' linewidth='0' width='420px'height='90px' margin='70px'>
// <NamedCart cart ={ { xname:'Cart', props:{ linewidth:'0' } }}
//         defaultIndicator='BingUnderBarSelectedDefault' defaultIndicatorProps={{padding:'40px'}}
//         indicator='ShadowIndicator' hoverIndicatorProps={{ }}
//         selector='BingUnderBarSelected' selectedIndicatorProps={{}} selected
//         > 
//         <ItemPlaceholder />
// </NamedCart>
// </CssCart>