import React from 'react';
import ItemPlaceholder from 'zero-element-boot/lib/components/presenter/ItemPlaceholder'
import ShadowIndicator from 'zero-element-boot/lib/components/indicator/ShadowIndicator';

export default function index(){
    return(
        <div style={{width:'400px',height:'200px',backgroundcolor:'#ff0000',margin:'100px'}}>
            <ShadowIndicator>
               <ItemPlaceholder size='30px'/>
                {/* <div style={{width:'200px',height:'120px'}}>11</div> */}
            </ShadowIndicator>
        </div>
    )
}