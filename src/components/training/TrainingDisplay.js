import React from "react";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Style
import "./TrainingDisplay.scss";

// Images
import CheckIcon from "../../utilities/assets/images/check-icon.png";
import CheckIconYellow from "../../utilities/assets/images/check-icon-yellow.png";

const percentage = 66;
function TrainingDisplay(props) {
  return (
    <div className="training__wrap">
      <div className="training__container">
        <h1>Training Program</h1>

        <div className="row">
          <div className="col-xl-3 col-lg-4">
            <div className="training__sideBar">
              <div class="progress-wrap">
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                  strokeWidth={4}
                  backgroundPadding={10}
                  styles={buildStyles({
                    rotation: 0.25,
                    pathTransitionDuration: 0.5,

                    // Colors
                    textColor: "#fff",
                    trailColor: "#fff",
                    backgroundColor: "#e0d647",
                  })}
                />
                ;
              </div>
              <ul className="training__list">
                <li>
                  <a href="#/" className="training__link">
                    Introduction
                    <img className="check__icon" src={CheckIcon} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#/" className="training__link">
                    How to create product?
                    <img className="check__icon" src={CheckIcon} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#/" className="training__link">
                    Market Strategy
                    <img className="check__icon" src={CheckIcon} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#/" className="training__link">
                    Demand and supply
                    <img className="check__icon" src={CheckIcon} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#/" className="training__link">
                    Customer Feedback
                    <img className="check__icon" src={CheckIcon} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#/" className="training__link">
                    Manage Team
                  </a>
                </li>
                <li>
                  <a href="#/" className="training__link">
                    Stakeholders
                  </a>
                </li>
                <li>
                  <a href="#/" className="training__link">
                    Effective Skills
                  </a>
                </li>
                <li>
                  <a href="#/" className="training__link">
                    Double Your Product
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-9 col-lg-8">
            <div className="training__right">
              <div className="course__videoBox">
                <div className="right__head">
                  <h3>Introduction</h3>
                  <span className="course__status">
                    <img src={CheckIconYellow} alt="" />
                    Completed
                  </span>
                </div>
                <div className="course__video">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/TGbUpEJ1z-k"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    title="video"
                  ></iframe>
                </div>
                <p className="video__review">
                  Please review the video and mark it as completed when finished
                </p>
              </div>
              <div className="update__status">
                <span>
                  Last Updated: 28-03-2020 6:00am by <a href="#/">Alex Smith</a>
                </span>
              </div>
              <div className="btns">
                <a href="#/" className="btn btn-outline-secondary">
                  Previous Video
                </a>
                <a href="#/" className="btn btn-outline-secondary">
                  Next Video
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrainingDisplay;
