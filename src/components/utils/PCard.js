import React, { Component } from 'react';

class PCard extends Component {
    render() {
        return (
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="card box" style={{ width: "18rem" }}>
            <img src={this.props.img} className="card-img-top" height="300px" alt="..." />
            <div className="card-body">
              <h5 className="card-title title">Title</h5>
              <p className="card-text description">Lorem, ipsum dolor sit amet consectetur
                adipisicing elit.  rerum officia ratione dolore eos
                voluptatibus eius ad. Dolor, omnis.</p>
              <button  className="btn buyBtn">
                Buy Now
              </button> 
            </div>
            </div>
        </div>
        );
    }
}

export default PCard;