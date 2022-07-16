

import './App.css';
import Home from './Pages/Home';

import Showproduct from './components/Showproduct';
import { Route, Routes } from 'react-router-dom';
import Payment from './Pages/Payment';
function App() {
  
  return (
    <div className="App">
      
      <Routes>
        <Route exact path='' element={<Home/>} />
        <Route path='product/:id' element={<Showproduct/>} />
        <Route path='payment_profile/' element={<Payment/>} />
      </Routes>
      
    </div>
  );
}

export default App;
