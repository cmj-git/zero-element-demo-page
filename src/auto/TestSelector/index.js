import React from 'react';
import ItemPlaceholder from 'zero-element-boot/lib/components/presenter/ItemPlaceholder'
import CssCart from 'zero-element-boot/lib/components/cart/CssCart';
import NamedCart from 'zero-element-boot/lib/components/NamedCart'


export default function index (props) {


    return (
        <>  
        
 
            <CssCart padding='0' linewidth='0' width='420px' height=''margin='10px'>
              <NamedCart cart ={ { xname:'Cart', props:{margin:'0',padding:'0', linewidth:'0' } }}
                        defaultIndicator='CircularCheckboxIndicatorDefault'
                        indicator='ShadowIndicator'
                        selector='CircularCheckboxIndicatorSelected' selected
                        > 
                        <ItemPlaceholder bg='' />
                </NamedCart>
                {/* <NamedCart cart ={ { xname:'Cart', props:{margin:'20px', linewidth:'0' } }}
                        defaultIndicator='CircularCheckboxIndicatorDefault'
                        indicator='ShadowIndicator'
                        selector='CircularCheckboxIndicatorSelected' selected
                        > 
                        <ItemPlaceholder />
                </NamedCart>  */}

                   

                {/* <NamedCart cart ={ { xname:'Cart', props:{margin:'20px', linewidth:'0' } }}
                        defaultIndicator='BorderStyleSelectedDefault'
                        indicator='ShadowIndicator'
                        selector='BorderStyleSelected' selected
                        > 
                        <ItemPlaceholder />
                </NamedCart> */}

            </CssCart>
         
        </>

    )

}

