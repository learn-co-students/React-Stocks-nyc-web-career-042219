import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    myPortfolio: [] 
  }

  handleClick = (props) => {
    if(this.state.myPortfolio.includes(props.stock)){
      this.setState({
        myPortfolio: this.state.myPortfolio.filter(stock => stock.id !== props.stock.id)
      })
    } else {
      this.setState({
        myPortfolio: [...this.state.myPortfolio, props.stock]
      })
    }
  }

  render() {
    // console.log(this.props.handleFilter)
    return (
      <div>
        <SearchBar handleFilter={this.props.handleFilter} handleNum={this.props.handleNum} handleAlpha={this.props.handleAlpha}/>

          <div className="row">
            <div className="col-8">

              <StockContainer handleClick={this.handleClick} stockCollection={this.props.stockCollection}/>

            </div>
            <div className="col-4">

            <PortfolioContainer handleClick={this.handleClick} myPortfolio={this.state.myPortfolio}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
