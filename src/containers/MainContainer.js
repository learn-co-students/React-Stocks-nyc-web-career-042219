import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'
import { runInThisContext } from 'vm';

class MainContainer extends Component {

  state={
    stocks: [],
    profile: [],
    sortType: "",
    filterType: ""
  }


  changeSortType = (type) => {
    this.setState({
      sortType: type
    })
  }

  changeFilterType = (e) => {
    console.log("event", e.target.value)
    this.setState({
      filterType: e.target.value
    }) 
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/stocks")
    .then(r => r.json())
    .then(data => {
      this.setState({
        stocks: data
      })
    })
  }

  addStockToProfile = (stockID) => {
    if(!this.state.profile.find(stock => stock.id === stockID)){

      let updatedProfile = [...this.state.profile, this.state.stocks.find(stock => stock.id === stockID)]
      this.setState({
        profile: updatedProfile
      })
    }
  }

  removeStockFromProfile = (stockID) => {
    let updatedProfile = this.state.profile
    updatedProfile.splice(this.state.profile.findIndex(stock => stock.id === stockID),1)
    this.setState({
      profile: updatedProfile
    })
  }

  filterStocks = () => {
    if(this.state.filterType){
      let filteredStocks= this.state.stocks.filter(stock => stock.type === this.state.filterType)
      return filteredStocks
    }
    return [...this.state.stocks]
  }

  sortStocks = () => {
    let filteredStocks = this.filterStocks()
    if(this.state.sortType === "alpha"){
      let sortedStocks = [...filteredStocks]
      sortedStocks.sort((a,b) => a.name.localeCompare(b.name))
      return sortedStocks
    }
    if(this.state.sortType === "price"){
      let sortedStocks = [...filteredStocks]
      sortedStocks.sort((a,b) => a.price-b.price)
      return sortedStocks
    }

    return filteredStocks
  }

  applyFilter = () =>{

  }

  render() {
    console.log(this.state)
    return (
      <div>
        <SearchBar changeFilterType={this.changeFilterType} changeSortType={this.changeSortType}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.sortStocks()} handleClick={this.addStockToProfile}/>

            </div>
            <div className="col-4">

              <PortfolioContainer handleClick={this.removeStockFromProfile} profileStocks={this.state.profile}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
