import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  createStocks = () => {
      return this.props.portfolio.map(stock => <Stock key={stock.id} {...stock} />)
    }

  render() {
    console.log(this.props)



    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.createStocks()
          }
      </div>
    );
  }

}

export default PortfolioContainer;
