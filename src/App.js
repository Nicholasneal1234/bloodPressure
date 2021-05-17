import logo from './logo.svg';
import './App.css';
import Header from './common/header/index.js';
import {Provider} from 'react-redux';
import store from './store/index.js';
import Home from './home/index.js';
import Detail from './detail/index.js';
import Login from './login/index.js';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Write from './write/index.js';

function App() {	
  return (
    <Provider store={store}>
      <Router>
        <div>
            <Header/>
            <Route path = '/' exact component = {Home}></Route>
            <Route path = '/detail/:id'  exact component = {Detail} ></Route>
            <Route path = '/login' excat component = {Login} ></Route>
            <Route path = '/write' excat component = {Write} ></Route>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
