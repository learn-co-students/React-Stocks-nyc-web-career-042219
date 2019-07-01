import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    portfolio: []
  }

  fetchStocks = () => {
    fetch('http://localhost:3000/stocks')
    .then(res=>res.json())
    .then(data => {
      this.setState({
        stocks: data
      })
    })
  }

  componentDidMount() {
    this.fetchStocks()
  }

  handleClick = (props) => {
    if(this.state.portfolio.includes(props.stock)){
      this.setState({
        portfolio: this.state.portfolio.filter(stock => stock.id !== props.stock.id)
      })
    } else {
      this.setState({
        portfolio: [...this.state.portfolio, props.stock]
      })
    }
  }

  sortAlphaStocks = () => {
    return [...this.state.stocks].sort((a, b) => {
      return a.name.localeCompare(b.name);
    })
  }

  handleAlphabetically = () => {
    this.setState({
      stocks: this.sortAlphaStocks()
    })
  }

  sortNumStocks = () => {
    return [...this.state.stocks].sort((a, b) => {
      return a.price - b.price;
    })
  }

  handlePrice = () => {
    this.setState({
      stocks: this.sortNumStocks()
    })
  }

  handleFilter = (eventTarget) => {
    console.log(eventTarget);
    switch (eventTarget) {
      case 'Tech':
        this.setState({
          stocks: [...this.state.stocks].filter(stock => stock.type === 'Tech')
        })
      break
      case 'Sportswear':
        this.setState({
          stocks: [...this.state.stocks].filter(stock => stock.type === 'Sportswear')
        })
      break
      case 'Finance':
        this.setState({
          stocks: [...this.state.stocks].filter(stock => stock.type === 'Finance')
        })
      break
    }
  }

  render() {
    // console.log(this.state.portfolio)
    return (
      <div>
        <SearchBar handleAlphabetically={this.handleAlphabetically} handlePrice={this.handlePrice} handleFilter={this.handleFilter}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.stocks} handleClick={this.handleClick}/>

            </div>
            <div className="col-4">

            <PortfolioContainer portfolio={this.state.portfolio} handleClick={this.handleClick} />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
