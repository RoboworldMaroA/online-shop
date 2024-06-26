
import './App.css';
import "react-toastify/dist/ReactToastify.css"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import NavBar from './components/NavBar';
import Home from './components/Home';
import NewCart from './components/NewCart';
import NotFound from './components/NotFound';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import CheckoutSuccess from './components/CheckoutSuccess';




function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <ToastContainer/>
        <NavBar/>
        
          <Routes>
          
          <Route path = "/" exact element={<Home/>}/>
          <Route path = "/cart" element={<NewCart/>}/>
          <Route path = "/checkout-success" element={<CheckoutSuccess/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path = "/not-found" element={<NotFound/>}/>
          
          <Route path="*" element={<NotFound/>} />

          </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
