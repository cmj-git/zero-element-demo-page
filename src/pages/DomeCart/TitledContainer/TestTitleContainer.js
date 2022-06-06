import React from 'react';
import ItemPlaceholder from '@/pages/ItemPlaceholder'
import TitledContainer from '@/pages/DomeCart/TitledContainer'

export default function TestTitleContainer(props) {
    return (
        <TitledContainer title='ItemPlaceholder'>
            <ItemPlaceholder />     
        </TitledContainer>
    )

}