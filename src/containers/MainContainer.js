import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    portfolio: [],
    filterType: null,
    sortType: null

  }

  handleRadio = (event) => {
    this.setState({
      sortType: event.target.value
    })
  }

  handleClick = (stock) => {
    if(!this.state.portfolio.find(oldStock => oldStock.id === stock.id)){
      let updatedPortfolio = [...this.state.portfolio, stock]
      this.setState({portfolio: updatedPortfolio})
    } else {
     let newPort = this.state.portfolio.filter(oldStock => oldStock.id !== stock.id)
     this.setState({portfolio: newPort})
    }
  }

  componentDidMount(){
    fetch("http://localhost:3000/stocks")
    .then(res => res.json())
    .then(data => this.setStocks(data))

  }

  handleChange = (event) => {
    this.setState({
      filterType: event.target.value
    }, () => console.log(this.state.filterType))
  }

  handleFilter = () => {
    if (this.state.filterType){
      return this.state.stocks.filter(stock => stock.type === this.state.filterType)
    } else {
      return this.state.stocks
    }
  }

  handleSort = () => {
    if (this.state.sortType === "Price"){
      return this.handleFilter().sort((stockA, stockB) => stockA.price - stockB.price)
    } else if (this.state.sortType === "Alphabetically") {
      return this.handleFilter().sort((stockA, stockB) => stockA.name.localeCompare(stockB.name))
    } else {
      return this.handleFilter()
    }
  }

  setStocks = (data) => {
    this.setState({stocks: data})
  }

  render() {
    return (
      <div>
        <SearchBar handleChange={this.handleChange} handleRadio={this.handleRadio}/>
          <div className="row">
            <div className="col-8">
              <StockContainer  handleClick={this.handleClick} stocks={this.handleSort()}/>
            </div>
            <div className="col-4">
              <PortfolioContainer portfolio={this.state.portfolio}/>
            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
