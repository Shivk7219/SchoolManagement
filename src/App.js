
import './App.css';
import Logout from './Student/Logout';
import Login from './Student/Login';
import Dashboard from './Student/Dashboard';
import Home from './Student/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './Student/Register';
import Gallery from './Student/Gallery';
import About from './Student/About';
import Contact from './Student/Contact';
import { Alert } from 'bootstrap';



function App() {

  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/login' element={<Login />}></Route>
          <Route exact path='/dashboard' element={<Dashboard />}></Route>
          <Route exact path='/register' element={<Register />}></Route>
          <Route exact path='/logout' element={<Logout />}></Route>
          <Route exact path='/gallery' element={<Gallery />}></Route>
          <Route exact path='/about' element={<About />}></Route>
          <Route exact path='/contact' element={<Contact />}></Route>
          <Route exact path='/alert' element={<Alert />}></Route>
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
