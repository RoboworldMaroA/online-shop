
import './App.css';
import {BrowserRouter, Route, Routes, Redirect} from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './components/Home';
import NewCart from './components/NewCart';




function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <NavBar/>
        
          <Routes>
          <Route path = "/Cart" element={<NewCart/>}/>
          <Route path = "/" element={<Home/>}/>

          </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
