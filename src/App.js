import './components/style/App.css'
import Home from './components/home/Home';
import { Switch , Route } from 'react-router-dom/cjs/react-router-dom.min';
import Contact from './components/contact/Contact'


function App() {
  return (
    <div className="App">
      
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/contact' component={Contact}/>
      </Switch>
    </div>
  );
}

export default App;
