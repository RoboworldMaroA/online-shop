
import './App.css';
import "react-toastify/dist/ReactToastify.css"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import NavBar from './components/NavBar';
import Home from './components/Home';
import NewCart from './components/NewCart';
import NotFound from './components/NotFound';




function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <ToastContainer/>
        <NavBar/>
        
          <Routes>
          <Route path = "/Cart" element={<NewCart/>}/>
          <Route path = "/" element={<Home/>}/>
          <Route path = "/not-found" element={<NotFound/>}/>
          
          <Route path="*" element={<NotFound/>} />

          </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
