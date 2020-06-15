import React from "react";

// components
import GeneralButton from "../../general/buttons/GeneralButton";

// images
import hikingWoman from "../../../utilities/assets/images/holly-mandarich-UVyOfX3v0Ls-unsplash.jpg";

// styles
import "./FirstLook.scss";

function FirstLook(props) {
  return (
    <section className="culture-view__first-look">
      <div className="first-look__container">
        <div className="text-container">
          <h4 className="c-med">
            Meet The <span>Culture</span> That Will Inspire You
          </h4>
          <p className="c-med">
            Don’t just live, live a FULL life--live your BEST life. These
            products are an extension of your passion.
          </p>
          <GeneralButton
            className="learnMore-btn"
            link={"www.google.com"}
            text="LEARN MORE"
            variant="yellow"
          />
        </div>
        <img className="hiking-woman" src={hikingWoman} alt="woman-hiking" />
      </div>
    </section>
  );
}

export default FirstLook;
