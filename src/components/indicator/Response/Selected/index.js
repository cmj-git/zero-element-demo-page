import React from 'react';
import TagIndicator from '@/components/indicator/TagIndicator'
import CssCart from 'zero-element-boot/lib/components/cart/CssCart';
import VStack from '@/components/layout/VStack'
import layoutImg from '@/assets/layout.svg'
import indicatorImg from '@/assets/indicator.svg'
import presenterImg from '@/assets/presenter.svg'
import gatawayImg from '@/assets/gataway.svg'
import StyleDatas from './index.less'

export default function Index(props) {

    const { children,onLayoutClick,onPresenterClick,onIndicatorClick ,onGatawayClick } = props
    const style = {
        position: 'relative',
        width:'100%',
        height:'100%'
    }

    const styles = {
        width: '88%',
        height: '100%',
        border: '2px solid #007acc',
        borderRadius: '3px',
        position: 'absolute'
    }
    
    return (
        <div style={style}>
            <div style={styles} >
                <div className={StyleDatas.Response}>
                    <VStack spacing={4}>
                            <TagIndicator  onTagClick={onLayoutClick}  solid circle color='#007acc' size='25px'>
                                <img src={layoutImg}/>
                            </TagIndicator>
                            <TagIndicator onTagClick={onIndicatorClick} solid circle color='#007acc' size='25px'>
                               <img src={indicatorImg}/>
                            </TagIndicator>
                            <TagIndicator onTagClick={onPresenterClick} solid circle color='#007acc' size='25px'>
                               <img src={presenterImg}/>
                            </TagIndicator>
                            <TagIndicator onTagClick={onGatawayClick} solid circle color='#007acc' size='25px'>
                               <img src={gatawayImg}/>
                            </TagIndicator>
                    </VStack>
                   
                </div>
                  
            </div>
                     { 
                        React.Children.map(children, child => (
                            child
                        ))
                    }
        </div>
    )
}