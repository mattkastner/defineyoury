import React from "react";
import "./joinNow.scss";

import tablePic from "../../../utilities/assets/images/dylan-gillis-KdeqA3aTnBY-unsplash.jpg";

function JoinNow(props) {
    return (
        <section>
            <div className="text-button-container">
                <div className="business-text-container">
                    <h1>
                        Join the <span>Best</span> affiliate program ever created
					</h1>
                    <p>
                        Unicity is committed to building people. Unicity's goal is to help
                        you reach your unique vision, optimize your life experiences, and
                        improve your lifestyle.
					</p>
                </div>
                <div className='join-now-container'>
                    <h2 className='join-now-button'>
                        <p>
                            Join Now
        </p>
                    </h2>

                </div>
            </div>
            <img className="tablePic" src={tablePic} alt="tablePic" />
        </section>
    );
}

export default JoinNow;
