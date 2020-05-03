import React from "react";

// images
import hikingWoman from "../../../utilities/assets/images/holly-mandarich-UVyOfX3v0Ls-unsplash.jpg";

// styles
import "./FirstLook.scss";

function FirstLook(props) {
  return (
      <section className="culture-view--first-look">
          <div className="first-look--text">
              <h4>Meet The <span>Culture</span> That Will Inspire You</h4>
              <p></p>
          </div>
      <img className="hiking-woman" src={hikingWoman} alt="woman-hiking" />
    </section>
  );
}

export default FirstLook;
