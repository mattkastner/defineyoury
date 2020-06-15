import React from "react";
import { Fade } from "react-reveal";

import FirstLook from "../components/culture/FirstLook/FirstLook";
import ProductVideos from "../components/culture/ProductVideos/ProductVideos";
import CultureText from "../components/culture/CultureText/CultureText";
import ActionCalls from "../components/culture/ActionCalls/ActionCalls";
import CultureDescriptions from "../components/culture/CultureDescriptions/CultureDescriptions";

function Culture() {
  return (
    <div className="culture-view">
      <Fade>
        <FirstLook />
        <ProductVideos />
        <CultureDescriptions />
        <CultureText />
        <ActionCalls />
      </Fade>
    </div>
  );
}

export default Culture;
