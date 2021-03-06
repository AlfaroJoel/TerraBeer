import React from 'react';
import Header from './Components/Header/Header';
import HomePage from './Pages/Home/HomePage';
import BeersPage from './Pages/Beers/BeersPage';
import CartPage from './Pages/Cart/CartPage';
import ContactPage from './Pages/Contact/ContactPage';
import FactoriesPage from './Pages/Factories/FactoriesPage';
import backgroundBeer from './Images/backgroundBeers.jpg';
import { Box, Button } from '@chakra-ui/react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Box className="App" minHeight='100vh' backgroundImage={backgroundBeer}
      backgroundSize='cover' backgroundAttachment='fixed'>
      <Router>
        <Header/>
        <Switch>
          <Route path="/cart" component={CartPage}/>
          <Route path="/beers" component={BeersPage}/>
          <Route path="/factories" component={FactoriesPage}/>
          <Route path="/contact" component={ContactPage}/>
          <Route path="/" exact component={HomePage}/>
        </Switch>
      </Router>
    </Box>
  );
}

export default App;
