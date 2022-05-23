import React from 'react';
import './GoWithMobileApp.css';
import app from '../../../assets/images/Untitled.png';

const GoWithMobileApp = () => {
    return (
        <div>
            <h2 className='app-h2 text-center'>Go mobile with our iOS and Android app.</h2>
            <div class="images">
                <img className='app-image'  src="https://www.zoho.com/inventory/mobile/appstore.svg" />
                <img  className='app-image' src="https://www.zoho.com/inventory/mobile/playstore-badge.svg" />
            </div>
            <div className='max-w-7xl mx-auto flex items-center justify-items mb-5 mob-size'>
                <div class="mockup-phone border-primary">
                    <div class="camera"></div>
                    <div class="display">
                        <div class="artboard artboard-demo phone-1"><img src={app} style={{ 'height': '90%' }} alt="" /></div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default GoWithMobileApp;