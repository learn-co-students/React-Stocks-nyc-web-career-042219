import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  addPortfolio = () => {

  }

  render() {
    // console.log(this.props.handleClick)
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.props.myPortfolio.map(stock => {
              return <Stock stock={stock} handleClick={this.props.handleClick} />
            })
          }
      </div>
    );
  }

}

export default PortfolioContainer;
