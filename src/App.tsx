import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginScreen from './component/Login/loginScreen';
import { BrowserRouter } from 'react-router-dom';
import Navigate from './Navigate';
function App() {
  return (
    <BrowserRouter>
      <Navigate />
    </BrowserRouter>
    // <div className="text-primary">
    //   {/* hi I am prasanth */}
    //    <LoginScreen/>
       
    // </div>
    
  );
}

export default App;
