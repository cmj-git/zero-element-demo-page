import React from 'react';
import ItemPlaceholder from '@/pages/ItemPlaceholder'
import TitleContainer from '@/pages/DomeCart/TitleContainer'

export default function TestTitleContainer(props) {
    return (
        <TitleContainer title='ItemPlaceholder'textAlign='center'>
            <ItemPlaceholder />     
        </TitleContainer>
    )

}