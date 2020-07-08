import React from 'react';
import './App.css';
import 'react-app-polyfill/stable';
import RestaurantList from './component/restaurant-list/restaurant-list'

function App() {
  return (
    <div className="App">
      <RestaurantList />
    </div>
  );
}

export default App;
