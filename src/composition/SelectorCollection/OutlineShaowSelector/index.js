import React from 'react';
import ItemPlaceholder from '@/pages/ItemPlaceholder'
import NamedSelector from '@/pages/DomeCart/NamedSelector'

import OutlineShaowSelectorDefault from '@/pages/DomeCart/OutlineShaowSelectorDefault';
import OutlineShaowSelectorHover from '@/pages/DomeCart/OutlineShaowSelectorHover';


export default function TestRight(props) {

     return (
        <>
<NamedSelector defaultIndicator={OutlineShaowSelectorDefault} 
                hoverIndicator={OutlineShaowSelectorHover} selected  > 
    <ItemPlaceholder />
 </NamedSelector> 

        </> 
    )

}

  
