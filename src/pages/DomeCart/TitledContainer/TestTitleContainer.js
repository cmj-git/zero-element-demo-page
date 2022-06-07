import React from 'react';
import ItemPlaceholder from '@/pages/ItemPlaceholder'
import TitledContainer from 'zero-element-boot/lib/components/container/TitledContainer'

export default function TestTitleContainer(props) {
    return (
        <TitledContainer title='ItemPlaceholder'>
            <ItemPlaceholder />     
        </TitledContainer>
    )

}