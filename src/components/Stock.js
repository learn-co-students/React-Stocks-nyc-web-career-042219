import React from 'react'

const Stock = (props) => (



  <div>

    <div onClick={() => props.handleClick(props)}className="card">
      <div className="card-body">
        <h5 className="card-title">{
            props.name
          }</h5>
        <p className="card-text">{
            props.ticker
          }</p>
      </div>
    </div>


  </div>
);

export default Stock
