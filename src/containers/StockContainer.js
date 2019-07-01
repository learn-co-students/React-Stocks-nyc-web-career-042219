import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  renderAllStocks = () => {
    return this.props.stocks.map(stock => <Stock key={stock.id} {...stock} handleClick={this.props.handleClick}/>)
  }

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
         this.renderAllStocks()
        }
      </div>
    );
  }

}

export default StockContainer;
