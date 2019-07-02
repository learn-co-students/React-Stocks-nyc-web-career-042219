import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    // console.log(this.props.handleClick)
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.props.stockCollection.map(stock => {
            return <Stock key={stock.id} stock={stock} handleClick={this.props.handleClick} />
          })
        }
      </div>
    );
  }

}

export default StockContainer;
