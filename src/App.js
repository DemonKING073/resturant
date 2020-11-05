import React from 'react';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Nav from './components/nav';
import LoginPage from './components/loginPage';
import RegisterPage from './components/registerPage';
import Footer from './components/footer';
import Home from './components/home';
import Menu from './components/menu';
import Contact from './components/contact';
import About from './components/about';
import Cart from './components/cart';
import allReducer from './reducers/allReducer';



const store = createStore(
  allReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" component={Menu} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/about" component={About} />
          <Route path="/cart" component={Cart} />
        </Switch> 
      </Router>
      <Footer />
    </Provider>
  );
}

export default App;
