import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {



  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
           this.props.profileStocks.map(stock => <Stock handleClick={this.props.handleClick} {...stock}/>)
          }
      </div>
    );
  }

}

export default PortfolioContainer;
