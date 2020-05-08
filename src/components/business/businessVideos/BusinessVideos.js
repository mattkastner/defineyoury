import React from 'react';
import './businessVideos.scss'
import BusinessVideosDisplay from './BusinessVideosDisplay';

function BusinessVideos(props) {
    return (
        <section>
            <div className='business-videos-body'>
                <div className='video-container'>
                    <h1 className='our-stories'>
                        Our Stories
                    </h1>
                </div>
                <BusinessVideosDisplay
                    text='Jan Bloom'
                />
                <BusinessVideosDisplay
                    text='Rav Malik'
                />
            </div>
        </section>
    );
}

export default BusinessVideos;