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
                            url='https://vimeo.com/115187166'
                        />
                        <BusinessVideosDisplay
                            text='Jan Bloom'
                            url='https://vimeo.com/81626214'
                        />
                        <BusinessVideosDisplay
                            text='Steve Farias'
                            url='https://vimeo.com/81637746'
                        />
                        <BusinessVideosDisplay
                            text='Rick Gash'
                            url='https://vimeo.com/81621066'
                        />
                        <BusinessVideosDisplay
                            text='April Judd'
                            url='https://vimeo.com/81616084'
                        />
                        <BusinessVideosDisplay
                            text='Paul Magisrti'
                            url='https://vimeo.com/81630932'
                        />
                        <BusinessVideosDisplay
                            text='Greg McTee'
                            url='https://vimeo.com/111804731'
                        />
                        <BusinessVideosDisplay
                            text='Jim Moyles'
                            url='https://vimeo.com/81629209'
                        />
                        <BusinessVideosDisplay
                            text='Todd Pettus'
                            url='https://vimeo.com/81635495'
                        />
                        <BusinessVideosDisplay
                            text='Phillip Song'
                            url='https://vimeo.com/81634353'
                        />
                        <BusinessVideosDisplay
                            text='Ron Thomson'
                            url='https://vimeo.com/81616083'
                        />
                        <BusinessVideosDisplay
                            text='Laurie Turner'
                            url='https://vimeo.com/81627692'
                        />
                        <BusinessVideosDisplay
                            text='Gundrun Van Dyke'
                            url='https://vimeo.com/81624109'
                        />
                        <BusinessVideosDisplay
                            text='Evan Weston'
                            url='https://vimeo.com/81624945'
                        />


                    </div>
                </div>
            </div>
        </section>
    );
}

export default BusinessVideos;