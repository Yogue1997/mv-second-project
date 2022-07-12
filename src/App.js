import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Admin from './components/Admin'
import PageNotFound from './components/PageNotFound';





function App() {

  const stylingComp = {
    textDecoration: "none",
    color: "aqua",
  };


  return (
    <div className="App">
      <BrowserRouter>
        <div id='main-nav'>
        <Link to='/'> <p id='logo'>logo</p> </Link>
        <ul className='parent' style={stylingComp}>
          <Link to='/home'><li className='children'>Home</li></Link>
          <Link to='/about'><li className='children'>About</li></Link>
          <Link to='admin'><li className='children'>admin</li></Link>
        </ul>
      </div>
        <Routes>
          <Route path='/*' element={<PageNotFound />}/>
          <Route path='/' element={<Home />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/admin' element={<Admin />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
