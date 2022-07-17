import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
// import './css/Admin.css'
import Toastify from './components/Toastify';
import Home from './components/Home';
import Admin from './components/Admin'
import PageNotFound from './components/PageNotFound';
import View from './components/View';
import Update from './components/Update';
// import Delete from './components/Delete';
import Add from './components/Add';
import { ToastContainer } from 'react-toastify';






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
          <Link to='/toast' style={stylingComp}><li className='children'>Toast</li></Link>
          <Link to='admin' style={stylingComp}><li className='children'>Admin</li></Link>
        </ul>
      </div>
        <Routes>
          <Route path='/' element={<Home />}/>
          {/* <Route path='/home' element={<Home />}/> */}
          <Route path='/toast' element={<Toastify />}/>
          <Route path='/add' element={<Add />}/>
          <Route path='/admin' element={<Admin />}/>
          <Route path='/view/:id' element={<View />}/>
          <Route path='/update/:id' element={<Update />}/>
          {/* <Route path='/delete/:id' element={<Delete />}/> */}
          <Route path='/*' element={<PageNotFound />}/>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
      <footer>Multiverse Second project</footer>
    </div>
  );
}

export default App;
