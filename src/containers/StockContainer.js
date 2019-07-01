import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    // console.log(this.props)
    return (
      <div>
        <h2>Stocks</h2>
        {
          //render the list of stocks here
          this.props.stocks.map( stock => < Stock stock={stock} handleClick={this.props.handleClick} />)
        }
      </div>
    );
  }

}

export default StockContainer;
