import React from 'react';
import JoinNow from '../components/business/joinNow/JoinNow'
import BusinessVideos from '../components/business/businessVideos/BusinessVideos';
import IntroVideos from '../components/business/introVideos/IntroVideos';
function Business(props) {
    return (
        <div>
            <JoinNow />
            <IntroVideos />
            <BusinessVideos />
        </div>
    );
}

export default Business;