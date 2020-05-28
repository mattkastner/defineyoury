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
                            title='Medical Practice Administrator'
                            url='https://vimeo.com/81626214'
                        />
                        <BusinessVideosDisplay
                            name='Steve Farias'
                            title='Orthopedic Implant Sales'
                            url='https://vimeo.com/81637746'
                        />
                        <BusinessVideosDisplay
                            name='Rick Gash'
                            title='Pharmaceutical Rep'
                            url='https://vimeo.com/81621066'
                        />
                        <BusinessVideosDisplay
                            name='April Judd'
                            title='Weight Loss & Management'
                            url='https://vimeo.com/81616084'
                        />
                        <BusinessVideosDisplay
                            name='Paul Magisrti'
                            title='Sr. VP Sales & Marketing'
                            url='https://vimeo.com/81630932'
                        />
                        <BusinessVideosDisplay
                            name='Greg McTee'
                            title='Commercial Real Estate'
                            url='https://vimeo.com/111804731'
                        />
                        <BusinessVideosDisplay
                            name='Jim Moyles'
                            title='Mergers & Acquisitions'
                            url='https://vimeo.com/81629209'
                        />
                        <BusinessVideosDisplay
                            name='Todd Pettus'
                            title='School Teacher'
                            url='https://vimeo.com/81635495'
                        />
                        <BusinessVideosDisplay
                            name='Phillip Song'
                            title='Cooperate Real Estate'
                            url='https://vimeo.com/81634353'
                        />
                        <BusinessVideosDisplay
                            name='Ron Thomson'
                            title='Insurance & Real Estate'
                            url='https://vimeo.com/81616083'
                        />
                        <BusinessVideosDisplay
                            name='Laurie Turner'
                            title='Medical Practice Manager'
                            url='https://vimeo.com/81627692'
                        />
                        <BusinessVideosDisplay
                            name='Gundrun Van Dyke'
                            title='Doctor of Naturopathy'
                            url='https://vimeo.com/81624109'
                        />
                        <BusinessVideosDisplay
                            name='Evan Weston'
                            title='Institutional Investment Management'
                            url='https://vimeo.com/81624945'
                        />


                    </div>
                </div>
            </div>
        </section>
    );
}

export default BusinessVideos;