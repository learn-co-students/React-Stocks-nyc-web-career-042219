import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  state = {
    stocks: [],
    portfolio: [],
    filtered: [],
    sortedBy: ''
  }

  componentDidMount() {
    fetch('http://localhost:3000/stocks')
    .then(r => r.json())
    .then(data => {
      this.setState({
        stocks: data,
        filtered: data
      })
    })
  }

  handleStock = (stock) => {
    let targetStock = this.state.portfolio.find(s => s.id === stock.id)
    if (targetStock === undefined) {
      this.setState({
        portfolio: [...this.state.portfolio, stock]
      })
    } else {
      let updatedPortfolio = this.state.portfolio.filter(s => s.id !== stock.id)
      this.setState({
        portfolio: updatedPortfolio
      })
    }
  }

  handleSort = (e) => {
    let filteredStocks = this.state.stocks.filter(s => s.type === e.target.value)
    this.setState({
      filtered: filteredStocks
    })
  }

  sortBy = (type) => {
    let sortedStocks = this.state.stocks
    if (type === 'alpha') {
      sortedStocks.sort((a, b) => (a.name < b.name ? -1 : (a.name > b.name ? 1 : 0)))
    } else if (type === 'price') {
      sortedStocks.sort((a, b) => b.price - a.price)
    }

    this.setState({
      filtered: sortedStocks,
      sortedBy: type
    })
  }
  render() {
    return (
      <div>
        <SearchBar handleSort={this.handleSort} sortBy={this.sortBy} sortedBy={this.state.sortedBy} />
          <div className="row">
            <div className="col-8">
              <StockContainer stocks={this.state.filtered} handleStock={this.handleStock} />
            </div>
            <div className="col-4">
              <PortfolioContainer portfolio={this.state.portfolio} />
            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
