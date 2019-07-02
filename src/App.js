import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

class App extends Component {

  state = {
    stockCollection: [],

  }

  sortStocksAlpha = () => {
    return [...this.state.stockCollection].sort((a,b)=> {
      return a.name.localeCompare(b.name)
    })
  }

  sortStocksNum = () => {
    return [...this.state.stockCollection].sort((a,b)=>{
     return b.price - a.price 
    })
  }

  handleAlpha = () => {
    this.setState({
      stockCollection: this.sortStocksAlpha()
    })
  }

  handleNum = () => {
    this.setState({
      stockCollection: this.sortStocksNum()
    })
  }

  handleFilter = (target) => {
    switch(target){
      case 'Tech':
        this.setState({
          stockCollection: [...this.state.stockCollection].filter(stock => {
            return stock.type === 'Tech'
          })
        })
        break
      case 'Finance': 
        this.setState({
          stockCollection: [...this.state.stockCollection].filter(stock => {
            return stock.type === 'Finance'
          })
        })
        break
      case 'Sportswear':
        this.setState({
          stockCollection: [...this.state.stockCollection].filter(stock => {
            return stock.type === 'Sportswear'
          })
        })
        break
    }
  }

  componentDidMount(){

    fetch('http://localhost:3000/stocks')
    .then(res => res.json())
    .then(stocks => {
      this.setState({stockCollection: stocks})
      
    })
  }
  render() {
    // console.log(this.state.stockCollection)
    return (
      <div>
        <Header/>
        <MainContainer handleFilter={this.handleFilter} handleNum={this.handleNum} handleAlpha={this.handleAlpha} stockCollection={this.state.stockCollection}/>
      </div>
    );
  }
}

export default App;
