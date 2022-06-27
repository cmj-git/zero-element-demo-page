import React from 'react';
import ShowHideIndicator from '@/components/indicator/ShowHideIndicator';

export default function index(){
    return(
        <div style={{width:'400px',height:'200px',backgroundcolor:'#ff0000',margin:'100px'}}>
            <ShowHideIndicator >
                <h1>holle</h1>
            </ShowHideIndicator>
        </div>
    )
}