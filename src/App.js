import './components/style/App.scss'
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home'
import Login from './components/login/Login';
import Movie from './components/movie/Movie';
import Navbaar from './components/navbar/Navbaar';
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="App">
      <Navbaar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path={'/login'} element={<Login/>}/>
          <Route path={'/:id'} element={<Movie/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
