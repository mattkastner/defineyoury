import React, { useState } from "react";

// components
import { productVideosData } from "./constants";
// style
import "./ProductVideos.scss";
import 'react-modal-video/scss/modal-video.scss';
// Images
import VideoPlayIcon from "../../../utilities/assets/images/button.png";
import ModalVideo from "react-modal-video";

function ProductVideos(props) {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="product-videos__wrap">
      <div className="product-videos__container">
        <div className="top-text">
          <h3>We are all in this together</h3>
          <p>
            After cleansing and balancing, your body now has the foundation it
            needs to build toward prime health. You’ve set the stage to take a
            targeted approach to your body Research and innovation are here to
            empower you with information, products, and services. Take
            responsibility for your health and quality of life! With over 400
            products in over 50 countries!
          </p>
        </div>

        <div className="product-videos">
          <div className="row">
            {productVideosData.map((data, index) => {
              return (
                <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
                  <div className="video-card">
                    <div className="image" onClick={() => setOpen(true)}>
                      <img src={data.img} alt="" />
                      <a href="#/" className="videoPlayIcon">
                        <img src={VideoPlayIcon} alt="" />
                      </a>
                    </div>
                    <span>{data.title}</span>
                    <p>{data.dec}</p>
                    {data.linkTitle.map((link, ind) => (
                      <button key={ind}>{link}</button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <ModalVideo
          channel="youtube"
          isOpen={isOpen}
          videoId="L61p2uyiMSo"
          onClose={() => setOpen(false)}
        />
      </div>
    </section>
  );
}

export default ProductVideos;
