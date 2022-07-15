import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
// import './css/Admin.css'
import About from './components/About';
import Home from './components/Home';
import Admin from './components/Admin'
import PageNotFound from './components/PageNotFound';
import View from './components/View';
import Update from './components/Update';
import Delete from './components/Delete';
import Add from './components/Add';





function App() {

  const stylingComp = {
    textDecoration: "none",
    color: "black",
  };


  return (
    <div className="App">
      <BrowserRouter>
        <div id='main-nav'>
        <Link to='/' style={stylingComp}> <p id='logo'>logo</p> </Link>
        <ul className='parent' >
          <Link to='/' style={stylingComp}><li className='children'>Home</li></Link>
          <Link to='/about' style={stylingComp}><li className='children'>About</li></Link>
          <Link to='admin' style={stylingComp}><li className='children'>Admin</li></Link>
        </ul>
      </div>
        <Routes>
          <Route path='/' element={<Home />}/>
          {/* <Route path='/home' element={<Home />}/> */}
          <Route path='/about' element={<About />}/>
          <Route path='/add' element={<Add />}/>
          <Route path='/admin' element={<Admin />}/>
          <Route path='/view/:id' element={<View />}/>
          <Route path='/update/:id' element={<Update />}/>
          <Route path='/delete/:id' element={<Delete />}/>
          <Route path='/*' element={<PageNotFound />}/>
        </Routes>
      </BrowserRouter>
      <footer>Multiverse Second project</footer>
    </div>
  );
}

export default App;
