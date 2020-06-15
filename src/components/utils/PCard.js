import React, { Component } from 'react';

class PCard extends Component {
  render() {
    return (
      //   <div className="col-sm-12 col-md-6 col-lg-3">
      //     <div className="card box" style={{ width: "18rem" }}>
      //     <img src={this.props.img} className="card-img-top" height="300px" alt="..." />
      //     <div className="card-body">
      //       <h5 className="card-title title">Title</h5>
      //       <p className="card-text description">Lorem, ipsum dolor sit amet consectetur
      //         adipisicing elit.  rerum officia ratione dolore eos
      //         voluptatibus eius ad. Dolor, omnis.</p>
      //       <button  className="btn buyBtn">
      //         Buy Now
      //       </button> 
      //     </div>
      //     </div>
      // </div>

      <div className="col-lg-3 col-md-4 col-sm-6">
        <div className="pc__Card">
          <div className="image">
            <img src={this.props.img} className="card-img-top" height="auto" width="100%" alt="..." />
          </div>
          <span className="title p-4">Title</span>
          <p className="p-4">
            Lorem, ipsum dolor sit amet consectetur
            adipisicing elit.  rerum officia ratione dolore eos
            voluptatibus eius ad. Dolor, omnis.
            </p>
          <button className="btn buyBtn">
            Buy Now
            </button>
        </div>
      </div>

    );
  }
}

export default PCard;