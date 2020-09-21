import React from 'react';
import logo from './logo.svg';
import './App.css';
import InputForm from './features/register/components/inputfrom';
import RegisterContainer from './features/register/container/registercontainer';
import View from './features/CartView/components/view';

function App() {
  return (
    <div className="App">
    
      <RegisterContainer/>
      {/* <View /> */}
    </div>
  );
}

export default App;
