import React, { useEffect, useState } from 'react';
import './businessVideos.scss'
import BusinessVideosDisplay from './BusinessVideosDisplay';


function BusinessVideos(props) {
    return (
        <section>
            <div className='business-videos-body'>
                <h1 className='our-stories'>
                    Our Stories
                    </h1>
                <div className='business-video-container'  >

                    <div className='business-videos'>
                        <BusinessVideosDisplay
                            name='Shavonda Crawford'
                            title='Cosmetologist'
                            url='https://vimeo.com/115187166'
                        />
                        <BusinessVideosDisplay
                            name='Jan Bloom'
                            url='https://vimeo.com/81626214'
                        />
                        <BusinessVideosDisplay
                            name='Steve Farias'
                            url='https://vimeo.com/81637746'
                        />
                        <BusinessVideosDisplay
                            name='Rick Gash'
                            url='https://vimeo.com/81621066'
                        />
                        <BusinessVideosDisplay
                            name='April Judd'
                            url='https://vimeo.com/81616084'
                        />
                        <BusinessVideosDisplay
                            name='Paul Magisrti'
                            url='https://vimeo.com/81630932'
                        />
                        <BusinessVideosDisplay
                            name='Greg McTee'
                            url='https://vimeo.com/111804731'
                        />
                        <BusinessVideosDisplay
                            name='Jim Moyles'
                            url='https://vimeo.com/81629209'
                        />
                        <BusinessVideosDisplay
                            name='Todd Pettus'
                            url='https://vimeo.com/81635495'
                        />
                        <BusinessVideosDisplay
                            name='Phillip Song'
                            url='https://vimeo.com/81634353'
                        />
                        <BusinessVideosDisplay
                            name='Ron Thomson'
                            url='https://vimeo.com/81616083'
                        />
                        <BusinessVideosDisplay
                            name='Laurie Turner'
                            url='https://vimeo.com/81627692'
                        />
                        <BusinessVideosDisplay
                            name='Gundrun Van Dyke'
                            url='https://vimeo.com/81624109'
                        />
                        <BusinessVideosDisplay
                            name='Evan Weston'
                            url='https://vimeo.com/81624945'
                        />


                    </div>
                </div>
            </div>
        </section>
    );
}

export default BusinessVideos;