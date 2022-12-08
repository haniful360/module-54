
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Headers from './components/Headers/Headers';
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import Grandpa from './components/Grandpa/Grandpa';

function App() {
  return (
    <div className="App">
      <Headers></Headers>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/order' element={<Orders></Orders>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/grandpa' element={<Grandpa></Grandpa>}></Route>
      </Routes>
    </div>
  );
}

export default App;
