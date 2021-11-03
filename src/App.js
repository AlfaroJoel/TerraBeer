import React from 'react';
import Header from './Components/Header/Header';
import HomePage from './Pages/Home/HomePage';
import BeersPage from './Pages/Beers/BeersPage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path="/beers" component={BeersPage}/>
          <Route path="/" exact component={HomePage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
