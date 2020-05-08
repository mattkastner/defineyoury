import React from 'react';
import JoinNow from '../components/business/joinNow/JoinNow'
import BusinessVideos from '../components/business/businessVideos/BusinessVideos';
function Business(props) {
    return (
        <div>
            <JoinNow />
            <BusinessVideos />
        </div>
    );
}

export default Business;