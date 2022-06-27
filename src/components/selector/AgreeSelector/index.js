import React from 'react';
import OverlaySelector from 'zero-element-boot/lib/components/OverlaySelector'
import AgreeAgreementSelectedHover from '@/components/indicator/AgreeAgreementSelected/Hover'
import AgreeAgreementSelectedDefault from '@/components/indicator/AgreeAgreementSelected/Default'
import AgreeAgreementSelectedSelected from '@/components/indicator/AgreeAgreementSelected/Selected'
import {Flex } from '@chakra-ui/react'


export default function index(props) {
    const { children } = props
    return (

            <Flex>
                <OverlaySelector defaultIndicator={AgreeAgreementSelectedDefault}
                    hoverIndicator={AgreeAgreementSelectedHover}
                    selectedIndicator={AgreeAgreementSelectedSelected} selected >
                    <div style={{ width: '2px', height: '2px' }} />
                </OverlaySelector>
                {
                    React.Children.map(children, child => (
                        child
                    ))
                }
            </Flex>


    )
}