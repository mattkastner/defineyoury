import React from 'react';
import './businessVideos.scss'
import BusinessVideosDisplay from './BusinessVideosDisplay';

function BusinessVideos(props) {
    return (
        <section>
            <div className='business-videos-body'>
                <h1 className='our-stories'>
                    Our Stories
                    </h1>
                <div className='business-video-container'>

                    <div className='business-videos'>
                        <BusinessVideosDisplay
                            text='Shavonda Crawford'
                            src='https://player.vimeo.com/video/115187166'
                        />
                        <BusinessVideosDisplay
                            text='Jan Bloom'
                        />
                        <BusinessVideosDisplay
                            text='Steve Farias'
                        />
                        <BusinessVideosDisplay
                            text='Rick Gash'
                        />
                        <BusinessVideosDisplay
                            text='April Judd'
                        />
                        <BusinessVideosDisplay
                            text='Paul Magisrti'
                        />
                        <BusinessVideosDisplay
                            text='Greg McTee'
                        />
                        <BusinessVideosDisplay
                            text='Jim Moyles'
                        />
                        <BusinessVideosDisplay
                            text='Todd Pettus'
                        />
                        <BusinessVideosDisplay
                            text='Phillip Song'
                        />
                        <BusinessVideosDisplay
                            text='Ron Thomson'
                        />
                        <BusinessVideosDisplay
                            text='Laurie Turner'
                        />
                        <BusinessVideosDisplay
                            text='Gundrun Van Dyke'
                        />
                        <BusinessVideosDisplay
                            text='Evan Weston'
                        />


                    </div>
                </div>
            </div>
        </section>
    );
}

export default BusinessVideos;