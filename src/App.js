import React, { Component, Fragment } from 'react';
import './App.css';
import {useSelector} from 'react-redux';

function App() {
  const { cart: products } = useSelector(state => state);
console.log(products);

return (
  <div className="App">
    {products.map(products => (
      <div className="container">
        {products.name}
        {products.unitPrice}
        {products.quantity}
      </div>
    )

    )}
  </div>
)

}

export default App;
