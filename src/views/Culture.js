import React from 'react';
import FirstLook from '../components/culture/FirstLook'
import ProductVideos from '../components/culture/ProductVideos'
import CultureText from '../components/culture/CultureText'
import ActionCalls from '../components/culture/ActionCalls';

function Culture(props) {
    return (
        <div>
            <FirstLook />
            <ProductVideos />
            <CultureText />
            <ActionCalls />
        </div>
    );
}

export default Culture;